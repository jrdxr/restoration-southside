/**
 * Planning Center to Webflow Sync
 * Simple, single-file sync logic
 */

import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import 'dotenv/config';


const PC_BASE_URL = 'https://api.planningcenteronline.com/registrations/v2';
const WF_BASE_URL = 'https://api.webflow.com/v2';
const STATE_FILE = './sync-state.json';
const HISTORY_FILE = './sync-history.json';

// ============================================
// Planning Center API
// ============================================

async function fetchPlanningCenterEvents() {
  const auth = Buffer.from(
    `${process.env.PLANNING_CENTER_APP_ID}:${process.env.PLANNING_CENTER_SECRET}`
  ).toString('base64');

  const url = `${PC_BASE_URL}/signups?include=categories,signup_times&filter=unarchived`;

  const res = await fetch(url, {
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json'
    }
  });

  if (!res.ok) throw new Error(`Planning Center API error: ${res.status}`);

  const data = await res.json();

  // Transform to simple event objects
  const events = [];
  const included = data.included || [];

  for (const signup of data.data || []) {
    // Get categories
    const catIds = signup.relationships?.categories?.data?.map(c => c.id) || [];
    const categories = included
      .filter(i => i.type === 'Category' && catIds.includes(i.id))
      .map(c => c.attributes.name);

    // Get signup times
    const timeIds = signup.relationships?.signup_times?.data?.map(t => t.id) || [];
    const times = included.filter(i => i.type === 'SignupTime' && timeIds.includes(i.id));

    // Create one event per signup time
    for (const time of times) {
      const startsAt = new Date(time.attributes.starts_at);

      // Only include future events
      if (startsAt > new Date()) {
        events.push({
          pc_signup_id: signup.id,
          pc_signup_time_id: time.id,
          name: signup.attributes.name,
          description: signup.attributes.description || '',
          logo_url: signup.attributes.logo_url || '',
          registration_url: signup.attributes.new_registration_url?.replace(/\/reservations\/new$/, '') || '',
          starts_at: time.attributes.starts_at,
          all_day: time.attributes.all_day || false,
          categories
        });
      }
    }
  }

  return events;
}

// ============================================
// Webflow API
// ============================================

async function webflowFetch(path, options = {}) {
  const res = await fetch(`${WF_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${process.env.WEBFLOW_API_TOKEN}`,
      'Content-Type': 'application/json',
      'accept': 'application/json',
      ...options.headers
    }
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Webflow API error ${res.status}: ${text}`);
  }

  return res.json();
}

async function getWebflowCategories() {
  const data = await webflowFetch(
    `/collections/${process.env.WEBFLOW_CATEGORIES_COLLECTION_ID}/items`
  );

  // Return map: { "Category Name": "webflow_id" }
  const map = {};
  for (const item of data.items || []) {
    if (item.fieldData?.name) {
      map[item.fieldData.name] = item.id;
    }
  }
  return map;
}

async function getWebflowEvents() {
  const data = await webflowFetch(
    `/collections/${process.env.WEBFLOW_EVENTS_COLLECTION_ID}/items`
  );

  // Return map: { "pc_signup_time_id": webflow_event }
  const map = {};
  for (const item of data.items || []) {
    const pcId = item.fieldData?.['planning-center-sign-up-time-id'];
    if (pcId) {
      map[pcId] = item;
    }
  }
  return map;
}

// Generate unique slug from event name and ID
function generateSlug(name, id) {
  const slugFromName = name
    .toLowerCase()                 
    .replace(/[^a-z0-9\s-]/g, '')    // remove all punctuation except spaces and dashes
    .trim()                           
    .replace(/\s+/g, '-')            // replace spaces with dashes
    .replace(/-+/g, '-');            // replace multiple dashes with single dash
  
  return `${slugFromName}-${id}`;
}

async function createWebflowEvent(event, categoryMap) {
  const categoryIds = event.categories
    .map(name => categoryMap[name])
    .filter(Boolean);

  const payload = {
    fieldData: {
      name: event.name,
      slug: generateSlug(event.name, event.pc_signup_time_id),
      'planning-center-id': event.pc_signup_id,
      'planning-center-sign-up-time-id': event.pc_signup_time_id,
      description: event.description,
      'cover-image': event.logo_url,
      'event-url': event.registration_url,
      date: event.starts_at,
      'time-2': event.starts_at,
      'all-day-event': event.all_day,
      categories: categoryIds
    },
    isDraft: false,
    isArchived: false
  };

  await webflowFetch(
    `/collections/${process.env.WEBFLOW_EVENTS_COLLECTION_ID}/items`,
    {
      method: 'POST',
      body: JSON.stringify(payload)
    }
  );
}

async function updateWebflowEvent(webflowId, event, categoryMap) {
  const categoryIds = event.categories
    .map(name => categoryMap[name])
    .filter(Boolean);

  const payload = {
    fieldData: {
      name: event.name,
      slug: generateSlug(event.name, event.pc_signup_time_id),
      'planning-center-id': event.pc_signup_id,
      'planning-center-sign-up-time-id': event.pc_signup_time_id,
      description: event.description,
      'cover-image': event.logo_url,
      'event-url': event.registration_url,
      date: event.starts_at,
      'time-2': event.starts_at,
      'all-day-event': event.all_day,
      categories: categoryIds
    },
    isDraft: false,
    isArchived: false
  };

  await webflowFetch(
    `/collections/${process.env.WEBFLOW_EVENTS_COLLECTION_ID}/items/${webflowId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(payload)
    }
  );
}

async function deleteWebflowEvent(webflowId) {
  const collectionPath = `/collections/${process.env.WEBFLOW_EVENTS_COLLECTION_ID}/items/${webflowId}`;
  
  const deleteRequest = (path) => fetch(`${WF_BASE_URL}${path}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${process.env.WEBFLOW_API_TOKEN}`,
      'accept': 'application/json'
    }
  });

  // Delete from both live and staging simultaneously
  const [liveRes, stagingRes] = await Promise.all([
    deleteRequest(`${collectionPath}/?live=true`).catch(() => null), // Ignore if not published
    deleteRequest(collectionPath)
  ]);

  // Check staging delete succeeded (the important one)
  if (stagingRes && !stagingRes.ok) {
    const text = await stagingRes.text();
    throw new Error(`Webflow API error ${stagingRes.status}: ${text}`);
  }
}

// ============================================
// Change Detection
// ============================================

function hasChanged(existingEvent, newEvent, categoryMap, lastState) {
  const existing = existingEvent.fieldData;
  const changes = [];

  // Normalize dates for comparison
  const normalize = (val) => {
    if (!val) return '';
    if (typeof val === 'string' && val.match(/^\d{4}-\d{2}-\d{2}T/)) {
      return new Date(val).toISOString();
    }
    return val;
  };

  // Format date for display
  const formatDate = (val) => {
    if (!val) return 'none';
    if (typeof val === 'string' && val.match(/^\d{4}-\d{2}-\d{2}T/)) {
      return new Date(val).toLocaleString();
    }
    return val;
  };

  // Check each field
  if (normalize(existing.name) !== normalize(newEvent.name)) {
    changes.push(`Name: "${existing.name}" → "${newEvent.name}"`);
  }
  if (normalize(existing.description) !== normalize(newEvent.description)) {
    changes.push('Description updated');
  }
  if (normalize(existing['event-url']) !== normalize(newEvent.registration_url)) {
    changes.push('Event URL updated');
  }
  if (normalize(existing.date) !== normalize(newEvent.starts_at)) {
    changes.push(`Date: ${formatDate(existing.date)} → ${formatDate(newEvent.starts_at)}`);
  }
  if (normalize(existing['all-day-event']) !== normalize(newEvent.all_day)) {
    changes.push(`All-day: ${existing['all-day-event']} → ${newEvent.all_day}`);
  }

  // Check image URL against last sync state
  const lastImageUrl = lastState[newEvent.pc_signup_time_id] || '';
  if (normalize(lastImageUrl) !== normalize(newEvent.logo_url)) {
    changes.push('Cover image updated');
  }

  // Check categories
  const existingCats = existing.categories || [];
  const newCats = newEvent.categories.map(name => categoryMap[name]).filter(Boolean);
  const catsChanged = existingCats.length !== newCats.length ||
    !existingCats.every(id => newCats.includes(id)) ||
    !newCats.every(id => existingCats.includes(id));

  if (catsChanged) {
    changes.push(`Categories: [${newEvent.categories.join(', ')}]`);
  }

  // Return object with changed flag and list of changes
  return {
    changed: changes.length > 0,
    changes
  };
}

// ============================================
// State Management
// ============================================

async function loadState() {
  if (!existsSync(STATE_FILE)) return {};
  const data = await readFile(STATE_FILE, 'utf-8');
  return JSON.parse(data);
}

async function saveState(state) {
  await writeFile(STATE_FILE, JSON.stringify(state, null, 2));
}

async function loadHistory() {
  if (!existsSync(HISTORY_FILE)) return [];
  const data = await readFile(HISTORY_FILE, 'utf-8');
  return JSON.parse(data);
}

async function saveHistory(result) {
  const history = await loadHistory();

  // Add new result
  history.unshift(result);

  // Keep only last 48 hours
  const cutoff = Date.now() - (48 * 60 * 60 * 1000);
  const filtered = history.filter(r => new Date(r.timestamp).getTime() > cutoff);

  await writeFile(HISTORY_FILE, JSON.stringify(filtered, null, 2));
}

// ============================================
// Main Sync Function
// ============================================

export async function runSync() {
  const startTime = Date.now();
  const result = {
    timestamp: new Date().toISOString(),
    success: true,
    created: 0,
    updated: 0,
    deleted: 0,
    createdItems: [],
    updatedItems: [],
    deletedItems: [],
    errors: []
  };

  try {
    console.log('\n=== Starting Sync ===');
    console.log('Time:', result.timestamp);

    // Load previous state
    const lastState = await loadState();
    const newState = {};

    // Fetch data
    console.log('Fetching Planning Center events...');
    const pcEvents = await fetchPlanningCenterEvents();
    console.log(`Found ${pcEvents.length} future events`);

    console.log('Fetching Webflow data...');
    const categoryMap = await getWebflowCategories();
    const webflowEvents = await getWebflowEvents();
    console.log(`Found ${Object.keys(webflowEvents).length} existing Webflow events`);

    // Track which PC events we've seen
    const pcEventIds = new Set();

    // Process each Planning Center event
    for (const pcEvent of pcEvents) {
      pcEventIds.add(pcEvent.pc_signup_time_id);
      newState[pcEvent.pc_signup_time_id] = pcEvent.logo_url;

      try {
        const existingEvent = webflowEvents[pcEvent.pc_signup_time_id];

        if (existingEvent) {
          // Check if update needed
          const changeResult = hasChanged(existingEvent, pcEvent, categoryMap, lastState);
          if (changeResult.changed) {
            console.log(`Updating: ${pcEvent.name}`);
            await updateWebflowEvent(existingEvent.id, pcEvent, categoryMap);
            result.updated++;
            result.updatedItems.push({
              name: pcEvent.name,
              changes: changeResult.changes
            });
          } else {
            console.log(`Skipping (no changes): ${pcEvent.name}`);
          }
        } else {
          // Create new
          console.log(`Creating: ${pcEvent.name}`);
          await createWebflowEvent(pcEvent, categoryMap);
          result.created++;
          result.createdItems.push(pcEvent.name);
        }
      } catch (error) {
        console.error(`Error processing ${pcEvent.name}:`, error.message);
        result.errors.push({
          event: pcEvent.name,
          error: error.message
        });
      }
    }

    // Delete events that no longer exist in Planning Center
    for (const [pcId, wfEvent] of Object.entries(webflowEvents)) {
      if (!pcEventIds.has(pcId)) {
        try {
          const eventName = wfEvent.fieldData?.name || wfEvent.id;
          console.log(`Deleting: ${eventName}`);
          await deleteWebflowEvent(wfEvent.id);
          result.deleted++;
          result.deletedItems.push(eventName);
        } catch (error) {
          console.error(`Error deleting ${wfEvent.id}:`, error.message);
          result.errors.push({
            event: wfEvent.fieldData?.name || wfEvent.id,
            error: error.message
          });
        }
      }
    }

    // Save state
    await saveState(newState);

    result.duration = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log('\n=== Sync Complete ===');
    console.log(`Duration: ${result.duration}s`);
    console.log(`Created: ${result.created}`);
    console.log(`Updated: ${result.updated}`);
    console.log(`Deleted: ${result.deleted}`);
    console.log(`Errors: ${result.errors.length}`);

    if (result.errors.length > 0) {
      result.success = false;
    }

  } catch (error) {
    console.error('\nFatal error:', error);
    result.success = false;
    result.errors.push({
      fatal: true,
      error: error.message
    });
    result.duration = ((Date.now() - startTime) / 1000).toFixed(2);
  }

  // Save to history
  await saveHistory(result);

  return result;
}

// Allow running directly: node sync.js
if (import.meta.url === `file://${process.argv[1]}`) {
  runSync()
    .then(() => process.exit(0))
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}
