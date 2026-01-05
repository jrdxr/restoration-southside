/**
 * Planning Center to Webflow Sync - Cloudflare Workers
 * Runs every 10 minutes via Cron Trigger
 */

const PC_BASE_URL = 'https://api.planningcenteronline.com/registrations/v2';
const WF_BASE_URL = 'https://api.webflow.com/v2';

// ============================================
// Main Worker Export
// ============================================

export default {
	// Cron trigger handler - runs every 10 minutes
	async scheduled(event, env, ctx) {
		console.log('Cron trigger fired at', new Date(event.scheduledTime).toISOString());
		ctx.waitUntil(runSync(env));
	},

	// HTTP handler - for dashboard and manual sync
	async fetch(request, env, ctx) {
		const url = new URL(request.url);

		// Manual sync endpoint
		if (url.pathname === '/sync' && request.method === 'POST') {
			const result = await runSync(env);
			return new Response(JSON.stringify(result), {
				headers: { 'Content-Type': 'application/json' }
			});
		}

		// Dashboard
		if (url.pathname === '/' || url.pathname === '') {
			const html = await renderDashboard(env);
			return new Response(html, {
				headers: { 'Content-Type': 'text/html' }
			});
		}

		return new Response('Not Found', { status: 404 });
	},
};

// ============================================
// Sync Logic
// ============================================

async function runSync(env) {
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
		console.log('Starting sync...');

		// Load previous state from KV
		const lastStateJson = await env.SYNC_DATA.get('sync-state');
		const lastState = lastStateJson ? JSON.parse(lastStateJson) : {};
		const newState = {};

		// Fetch data
		const pcEvents = await fetchPlanningCenterEvents(env);
		console.log(`Found ${pcEvents.length} future events`);

		const categoryMap = await getWebflowCategories(env);
		const webflowEvents = await getWebflowEvents(env);
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
						await updateWebflowEvent(existingEvent.id, pcEvent, categoryMap, env);
						result.updated++;
						result.updatedItems.push({
							name: pcEvent.name,
							changes: changeResult.changes
						});
					}
				} else {
					// Create new
					console.log(`Creating: ${pcEvent.name}`);
					await createWebflowEvent(pcEvent, categoryMap, env);
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
					const eventName = wfEvent.fieldData?.name || pcId;
					console.log(`Deleting: ${eventName}`);
					await deleteWebflowEvent(wfEvent.id, env);
					result.deleted++;
					result.deletedItems.push(eventName);
				} catch (error) {
					console.error(`Error deleting ${pcId}:`, error.message);
					result.errors.push({
						event: wfEvent.fieldData?.name || pcId,
						error: error.message
					});
				}
			}
		}

		// Save state to KV
		await env.SYNC_DATA.put('sync-state', JSON.stringify(newState));

		result.duration = ((Date.now() - startTime) / 1000).toFixed(2);
		console.log(`Sync complete in ${result.duration}s`);

		if (result.errors.length > 0) {
			result.success = false;
		}
	} catch (error) {
		console.error('Fatal error:', error);
		result.success = false;
		result.errors.push({
			fatal: true,
			error: error.message
		});
		result.duration = ((Date.now() - startTime) / 1000).toFixed(2);
	}

	// Save to history (keep last 5 syncs)
	await saveHistory(env, result);

	return result;
}

// ============================================
// Planning Center API
// ============================================

async function fetchPlanningCenterEvents(env) {
	const auth = btoa(`${env.PLANNING_CENTER_APP_ID}:${env.PLANNING_CENTER_SECRET}`);
	const url = `${PC_BASE_URL}/signups?include=categories,signup_times&filter=unarchived`;

	const res = await fetch(url, {
		headers: {
			'Authorization': `Basic ${auth}`,
			'Content-Type': 'application/json'
		}
	});

	if (!res.ok) throw new Error(`Planning Center API error: ${res.status}`);

	const data = await res.json();
	const events = [];
	const included = data.included || [];

	for (const signup of data.data || []) {
		const catIds = signup.relationships?.categories?.data?.map((c) => c.id) || [];
		const categories = included
			.filter((i) => i.type === 'Category' && catIds.includes(i.id))
			.map((c) => c.attributes.name);

		const timeIds = signup.relationships?.signup_times?.data?.map((t) => t.id) || [];
		const times = included.filter((i) => i.type === 'SignupTime' && timeIds.includes(i.id));

		for (const time of times) {
			const startsAt = new Date(time.attributes.starts_at);

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

async function webflowFetch(path, env, options = {}) {
	const res = await fetch(`${WF_BASE_URL}${path}`, {
		...options,
		headers: {
			'Authorization': `Bearer ${env.WEBFLOW_API_TOKEN}`,
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

async function getWebflowCategories(env) {
	const data = await webflowFetch(
		`/collections/${env.WEBFLOW_CATEGORIES_COLLECTION_ID}/items`,
		env
	);

	const map = {};
	for (const item of data.items || []) {
		if (item.fieldData?.name) {
			map[item.fieldData.name] = item.id;
		}
	}
	return map;
}

async function getWebflowEvents(env) {
	const data = await webflowFetch(
		`/collections/${env.WEBFLOW_EVENTS_COLLECTION_ID}/items`,
		env
	);

	const map = {};
	for (const item of data.items || []) {
		const pcId = item.fieldData?.['planning-center-sign-up-time-id'];
		if (pcId) {
			map[pcId] = item;
		}
	}
	return map;
}

function generateSlug(name, id) {
	const slugFromName = name
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, '')
		.trim()
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');

	return `${slugFromName}-${id}`;
}

async function createWebflowEvent(event, categoryMap, env) {
	const categoryIds = event.categories
		.map((name) => categoryMap[name])
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
		`/collections/${env.WEBFLOW_EVENTS_COLLECTION_ID}/items`,
		env,
		{
			method: 'POST',
			body: JSON.stringify(payload)
		}
	);
}

async function updateWebflowEvent(webflowId, event, categoryMap, env) {
	const categoryIds = event.categories
		.map((name) => categoryMap[name])
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
		`/collections/${env.WEBFLOW_EVENTS_COLLECTION_ID}/items/${webflowId}`,
		env,
		{
			method: 'PATCH',
			body: JSON.stringify(payload)
		}
	);
}

async function deleteWebflowEvent(webflowId, env) {
	const collectionPath = `/collections/${env.WEBFLOW_EVENTS_COLLECTION_ID}/items/${webflowId}`;

	const deleteRequest = (path) => fetch(`${WF_BASE_URL}${path}`, {
		method: 'DELETE',
		headers: {
			'Authorization': `Bearer ${env.WEBFLOW_API_TOKEN}`,
			'accept': 'application/json'
		}
	});

	await Promise.all([
		deleteRequest(`${collectionPath}/?live=true`).catch(() => null),
		deleteRequest(collectionPath)
	]);
}

// ============================================
// Change Detection
// ============================================

function hasChanged(existingEvent, newEvent, categoryMap, lastState) {
	const existing = existingEvent.fieldData;
	const changes = [];

	const normalize = (val) => {
		if (!val) return '';
		if (typeof val === 'string' && val.match(/^\d{4}-\d{2}-\d{2}T/)) {
			return new Date(val).toISOString();
		}
		return val;
	};

	const formatDate = (val) => {
		if (!val) return 'none';
		if (typeof val === 'string' && val.match(/^\d{4}-\d{2}-\d{2}T/)) {
			return new Date(val).toLocaleString();
		}
		return val;
	};

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

	const lastImageUrl = lastState[newEvent.pc_signup_time_id] || '';
	if (normalize(lastImageUrl) !== normalize(newEvent.logo_url)) {
		changes.push('Cover image updated');
	}

	const existingCats = existing.categories || [];
	const newCats = newEvent.categories.map((name) => categoryMap[name]).filter(Boolean);
	const catsChanged = existingCats.length !== newCats.length ||
		!existingCats.every((id) => newCats.includes(id)) ||
		!newCats.every((id) => existingCats.includes(id));

	if (catsChanged) {
		changes.push(`Categories: [${newEvent.categories.join(', ')}]`);
	}

	return {
		changed: changes.length > 0,
		changes
	};
}

// ============================================
// KV Storage
// ============================================

async function saveHistory(env, result) {
	const historyJson = await env.SYNC_DATA.get('sync-history');
	const history = historyJson ? JSON.parse(historyJson) : [];

	history.unshift(result);

	// Keep only last 5 syncs
	const filtered = history.slice(0, 5);

	await env.SYNC_DATA.put('sync-history', JSON.stringify(filtered));
}

// ============================================
// Dashboard
// ============================================

async function renderDashboard(env) {
	const historyJson = await env.SYNC_DATA.get('sync-history');
	const history = historyJson ? JSON.parse(historyJson) : [];

	return `<!DOCTYPE html>
<html>
<head>
  <title>Planning Center Sync</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #f5f5f5;
      padding: 20px;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    h1 {
      font-size: 28px;
      margin-bottom: 10px;
      color: #333;
    }
    .subtitle {
      color: #666;
      margin-bottom: 30px;
    }
    button {
      background: #1976d2;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      margin-bottom: 30px;
    }
    button:hover { background: #1565c0; }
    .info {
      background: #f5f5f5;
      padding: 15px;
      border-radius: 6px;
      margin-bottom: 30px;
      font-size: 14px;
      color: #666;
    }
    h2 {
      font-size: 20px;
      margin: 30px 0 15px 0;
      color: #333;
    }
    .sync-item {
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      padding: 15px;
      margin-bottom: 10px;
    }
    .sync-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .sync-time {
      font-size: 14px;
      color: #666;
    }
    .sync-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
    }
    .sync-badge.success { background: #e8f5e9; color: #2e7d32; }
    .sync-badge.error { background: #ffebee; color: #c62828; }
    .sync-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-top: 10px;
      font-size: 14px;
    }
    .stat {
      background: #f9f9f9;
      padding: 8px;
      border-radius: 4px;
      text-align: center;
    }
    .stat-value {
      font-size: 20px;
      font-weight: 600;
      color: #333;
    }
    .stat-label {
      font-size: 11px;
      color: #666;
      text-transform: uppercase;
      margin-top: 2px;
    }
    .empty {
      text-align: center;
      padding: 40px;
      color: #999;
    }
    .details-section {
      margin-top: 15px;
    }
    .details-title {
      font-size: 13px;
      font-weight: 600;
      color: #555;
      margin-bottom: 8px;
      text-transform: uppercase;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 15px;
      font-size: 13px;
    }
    th {
      background: #f5f5f5;
      padding: 8px;
      text-align: left;
      font-weight: 600;
      border-bottom: 2px solid #ddd;
    }
    td {
      padding: 8px;
      border-bottom: 1px solid #eee;
    }
    .change-detail {
      font-size: 12px;
      color: #666;
      margin: 2px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Planning Center → Webflow Sync</h1>
    <p class="subtitle">Cloudflare Workers with Cron Triggers</p>

    <button onclick="triggerSync()">Sync Now</button>

    <div class="info">
      <strong>Automatic sync:</strong> Every 10 minutes<br>
      <strong>History:</strong> Last 5 syncs
    </div>

    <h2>Recent Syncs</h2>

    ${history.length === 0 ? '<div class="empty">No syncs yet. Click "Sync Now" to start.</div>' : ''}

    ${history.map((sync) => `
      <div class="sync-item">
        <div class="sync-header">
          <div class="sync-time">${new Date(sync.timestamp).toLocaleString('en-US', { timeZone: 'America/New_York' })}</div>
          <span class="sync-badge ${sync.success ? 'success' : 'error'}">
            ${sync.success ? 'Success' : 'Failed'}
          </span>
        </div>
        <div class="sync-stats">
          <div class="stat">
            <div class="stat-value">${sync.created || 0}</div>
            <div class="stat-label">Created</div>
          </div>
          <div class="stat">
            <div class="stat-value">${sync.updated || 0}</div>
            <div class="stat-label">Updated</div>
          </div>
          <div class="stat">
            <div class="stat-value">${sync.deleted || 0}</div>
            <div class="stat-label">Deleted</div>
          </div>
          <div class="stat">
            <div class="stat-value">${sync.duration || '0'}s</div>
            <div class="stat-label">Duration</div>
          </div>
        </div>

        ${sync.createdItems && sync.createdItems.length > 0 ? `
          <div class="details-section">
            <div class="details-title">Created Events</div>
            <table>
              <thead><tr><th>Event Name</th></tr></thead>
              <tbody>
                ${sync.createdItems.map((name) => `<tr><td>${name}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        ` : ''}

        ${sync.updatedItems && sync.updatedItems.length > 0 ? `
          <div class="details-section">
            <div class="details-title">Updated Events</div>
            <table>
              <thead><tr><th>Event Name</th><th>Changes</th></tr></thead>
              <tbody>
                ${sync.updatedItems.map((item) => `
                  <tr>
                    <td>${item.name}</td>
                    <td>
                      ${item.changes.map((change) => `<div class="change-detail">• ${change}</div>`).join('')}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : ''}

        ${sync.deletedItems && sync.deletedItems.length > 0 ? `
          <div class="details-section">
            <div class="details-title">Deleted Events</div>
            <table>
              <thead><tr><th>Event Name</th></tr></thead>
              <tbody>
                ${sync.deletedItems.map((name) => `<tr><td>${name}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        ` : ''}
      </div>
    `).join('')}
  </div>

  <script>
    async function triggerSync() {
      const btn = document.querySelector('button');
      btn.disabled = true;
      btn.textContent = 'Syncing...';

      try {
        const res = await fetch('/sync', { method: 'POST' });
        const data = await res.json();
        alert(\`Sync complete! Created: \${data.created}, Updated: \${data.updated}, Deleted: \${data.deleted}\`);
        setTimeout(() => window.location.reload(), 1000);
      } catch (error) {
        alert('Sync failed: ' + error.message);
        btn.disabled = false;
        btn.textContent = 'Sync Now';
      }
    }
  </script>
</body>
</html>`;
}
