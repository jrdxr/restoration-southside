# Planning Center to Webflow Sync - Cloudflare Workers

Automated sync from Planning Center Registrations to Webflow CMS, running every 10 minutes via Cloudflare Workers Cron Triggers.

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Create KV namespace
```bash
wrangler kv:namespace create SYNC_DATA
```

Copy the `id` from the output and update `wrangler.toml`:
```toml
[[kv_namespaces]]
binding = "SYNC_DATA"
id = "your_namespace_id_here"
```

### 3. Set environment variables
```bash
wrangler secret put PLANNING_CENTER_APP_ID
wrangler secret put PLANNING_CENTER_SECRET
wrangler secret put WEBFLOW_API_TOKEN
wrangler secret put WEBFLOW_EVENTS_COLLECTION_ID
wrangler secret put WEBFLOW_CATEGORIES_COLLECTION_ID
```

### 4. Deploy
```bash
npm run deploy
```

## Development

Test locally:
```bash
npm run dev
```

Test cron trigger:
```bash
npm run sync
```

## Dashboard

Visit your worker URL to see the dashboard with sync history.

Trigger manual sync: `POST /sync`
