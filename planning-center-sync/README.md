# Planning Center → Webflow Sync (v2)

Simple, lightweight sync between Planning Center events and Webflow CMS.

## What's Different from v1?

- **2 files instead of 9** - All sync logic in one file
- **2 dependencies instead of Next.js** - Just Express and node-cron
- **~5MB instead of 223MB** - Much smaller footprint
- **No build step** - Just run it
- **Easier to understand** - Straightforward Node.js

## Features

- Syncs Planning Center events to Webflow every 10 minutes
- Web dashboard showing last 48 hours of sync history
- One-click manual sync from dashboard
- Smart change detection (only updates when data actually changes)
- Tracks image URLs to detect real changes
- Creates/updates/deletes events automatically

## Quick Start

### 1. Install Dependencies

```bash
cd planning-center-sync-v2
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and add your credentials:

```bash
cp .env.example .env
```

Then edit `.env` with your actual values:

```env
PLANNING_CENTER_APP_ID=your_actual_app_id
PLANNING_CENTER_SECRET=your_actual_secret
WEBFLOW_API_TOKEN=your_actual_token
WEBFLOW_EVENTS_COLLECTION_ID=your_events_collection_id
WEBFLOW_CATEGORIES_COLLECTION_ID=your_categories_collection_id
```

### 3. Run

```bash
npm start
```

Visit **http://localhost:3000** to see the dashboard.

## How It Works

### Automatic Sync

Once the server is running, it automatically syncs every 10 minutes. You'll see console output like:

```
=== Starting Sync ===
Time: 2025-12-30T10:00:00.000Z
Fetching Planning Center events...
Found 12 future events
Fetching Webflow data...
Found 10 existing Webflow events
Creating: Youth Night
Updating: Sunday Service
Skipping (no changes): Men's Breakfast
...
=== Sync Complete ===
Created: 2
Updated: 1
Deleted: 0
Errors: 0
```

### Manual Sync

Visit the dashboard at http://localhost:3000 and click "Sync Now"

Or use curl:
```bash
curl -X POST http://localhost:3000/sync
```

### Web Dashboard

The dashboard shows:
- Current sync status
- Manual sync button
- Last 48 hours of sync history
- Stats for each sync (created, updated, deleted)
- Any errors that occurred

## File Structure

```
planning-center-sync-v2/
├── sync.js              # All sync logic (fetch, transform, create/update/delete)
├── server.js            # Web server + cron scheduler
├── package.json         # Dependencies (just 2!)
├── .env                 # Your credentials (not in git)
├── sync-state.json      # Tracks image URLs (auto-generated)
└── sync-history.json    # Last 48hrs of syncs (auto-generated)
```

## Understanding the Code

### sync.js

This file has everything needed to sync:

1. **Planning Center API** (lines 15-70)
   - `fetchPlanningCenterEvents()` - Gets events from Planning Center
   - Transforms them into simple objects
   - Filters for future events only

2. **Webflow API** (lines 75-195)
   - `getWebflowCategories()` - Gets category name → ID map
   - `getWebflowEvents()` - Gets existing events
   - `createWebflowEvent()` - Creates new event
   - `updateWebflowEvent()` - Updates existing event
   - `deleteWebflowEvent()` - Deletes old event
   - `hasChanged()` - Smart comparison to avoid unnecessary updates

3. **State Management** (lines 240-270)
   - Saves image URLs to detect when images change
   - Saves sync history for the dashboard

4. **Main Sync** (lines 275-365)
   - Orchestrates the whole process
   - Handles errors gracefully
   - Logs everything

### server.js

This file runs the web server:

1. **Dashboard** (lines 20-180)
   - Shows sync history in a nice UI
   - Has "Sync Now" button
   - Auto-refreshes after manual sync

2. **API Endpoints**
   - `GET /` - Dashboard homepage
   - `POST /sync` - Trigger manual sync
   - `GET /health` - Health check

3. **Cron Job** (lines 210-225)
   - Runs sync every 10 minutes
   - Uses standard cron syntax: `*/10 * * * *`

## Common Tasks

### Change Sync Frequency

Edit `server.js` line 210:

```javascript
// Every 5 minutes
cron.schedule('*/5 * * * *', async () => { ... });

// Every hour
cron.schedule('0 * * * *', async () => { ... });

// Every day at 9am
cron.schedule('0 9 * * *', async () => { ... });
```

[Cron syntax reference](https://crontab.guru/)

### Run Sync Manually (Without Server)

```bash
npm run sync
```

This runs just the sync once and exits.

### Add More Logging

In `sync.js`, add `console.log()` wherever you want:

```javascript
console.log('Creating event:', pcEvent.name);
console.log('Event data:', pcEvent);
```

### Change Dashboard Port

In `.env`:
```env
PORT=8080
```

Or when running:
```bash
PORT=8080 npm start
```

## Deployment

### Option 1: Run on Any Server

1. Copy files to server
2. Run `npm install`
3. Set environment variables
4. Run `npm start`
5. Use PM2 or systemd to keep it running

### Option 2: Docker

Create `Dockerfile`:
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
```

### Option 3: Webflow Cloud

1. Push to Git repository
2. Deploy to Webflow Cloud
3. Set environment variables in Webflow dashboard
4. Done! (No cron setup needed, the app runs its own scheduler)

## Troubleshooting

### "Sync already in progress"

The sync is already running. Wait for it to finish (~30 seconds usually).

### "Planning Center API error: 401"

Check your `PLANNING_CENTER_APP_ID` and `PLANNING_CENTER_SECRET` in `.env`

### "Webflow API error: 401"

Check your `WEBFLOW_API_TOKEN` in `.env`

### No events showing up

- Check that events are in the future (past events are filtered out)
- Check that category names in Planning Center exactly match Webflow
- Look at the sync history in the dashboard for errors

### Categories not mapping

Category names must match EXACTLY (case-sensitive):
- ✅ "Youth" matches "Youth"
- ❌ "youth" does NOT match "Youth"
- ❌ "Youth Events" does NOT match "Youth"

## What Gets Synced

### Planning Center → Webflow Mapping

| Planning Center | Webflow Field |
|----------------|---------------|
| Signup name | `name` |
| Signup description | `description` |
| Signup logo | `cover-image` |
| Registration URL | `event-url` |
| Signup time starts_at | `date` and `time-2` |
| Signup time all_day | `all-day-event` |
| Categories (by name) | `categories` (multi-reference) |
| Signup ID | `planning-center-id` |
| Signup time ID | `planning-center-sign-up-time-id` |

### What Triggers an Update

An event is updated in Webflow when ANY of these change:
- Event name
- Description
- Registration URL
- Date/time
- All-day flag
- Categories
- **Image URL** (even if Webflow transformed it)

If nothing changed, the update is skipped (saves API calls).

## Support

Need help? Check:
- [Planning Center API Docs](https://developer.planning.center/docs)
- [Webflow API Docs](https://developers.webflow.com)
- [Node.js Docs](https://nodejs.org/docs)

## License

MIT
