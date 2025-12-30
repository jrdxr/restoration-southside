/**
 * Simple web server with cron scheduler
 * - Runs sync every 10 minutes
 * - Provides web dashboard at http://localhost:3000
 * - Manual sync endpoint: POST /sync
 */

import express from 'express';
import cron from 'node-cron';
import { runSync } from './sync.js';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;
const HISTORY_FILE = './sync-history.json';

// Track if a sync is currently running
let syncInProgress = false;

// ============================================
// Routes
// ============================================

// Homepage - Dashboard showing sync history
app.get('/', async (req, res) => {
  try {
    let history = [];
    if (existsSync(HISTORY_FILE)) {
      const data = await readFile(HISTORY_FILE, 'utf-8');
      history = JSON.parse(data);
    }

    const html = `
<!DOCTYPE html>
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
    .status {
      display: inline-block;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    .status.running { background: #e3f2fd; color: #1976d2; }
    .status.idle { background: #e8f5e9; color: #388e3c; }
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
    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
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
    .errors {
      background: #fff3e0;
      padding: 10px;
      border-radius: 4px;
      margin-top: 10px;
      font-size: 13px;
    }
    .error-item {
      margin: 5px 0;
      color: #e65100;
    }
    .empty {
      text-align: center;
      padding: 40px;
      color: #999;
    }
    #message {
      padding: 12px;
      border-radius: 6px;
      margin-bottom: 20px;
      display: none;
    }
    #message.success { background: #e8f5e9; color: #2e7d32; }
    #message.error { background: #ffebee; color: #c62828; }
    .details-section {
      margin-top: 15px;
    }
    .details-title {
      font-size: 13px;
      font-weight: 600;
      color: #555;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
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
    tr:last-child td {
      border-bottom: none;
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
    <p class="subtitle">Automated event synchronization</p>

    <div class="status ${syncInProgress ? 'running' : 'idle'}">
      ${syncInProgress ? '⏳ Sync in progress...' : '✓ Ready'}
    </div>

    <br>

    <button onclick="triggerSync()" ${syncInProgress ? 'disabled' : ''}>
      Sync Now
    </button>

    <div id="message"></div>

    <div class="info">
      <strong>Automatic sync:</strong> Every 10 minutes<br>
      <strong>History:</strong> Last 5 syncs
    </div>

    <h2>Recent Syncs</h2>

    ${history.length === 0 ? '<div class="empty">No syncs yet. Click "Sync Now" to start.</div>' : ''}

    ${history.slice(0, 5).map(sync => `
      <div class="sync-item">
        <div class="sync-header">
          <div class="sync-time">
            ${new Date(sync.timestamp).toLocaleString()}
          </div>
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
                ${sync.createdItems.map(name => `<tr><td>${name}</td></tr>`).join('')}
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
                ${sync.updatedItems.map(item => `
                  <tr>
                    <td>${item.name}</td>
                    <td>
                      ${item.changes.map(change => `<div class="change-detail">• ${change}</div>`).join('')}
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
                ${sync.deletedItems.map(name => `<tr><td>${name}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        ` : ''}

        ${sync.errors && sync.errors.length > 0 ? `
          <div class="errors">
            <strong>Errors (${sync.errors.length}):</strong>
            ${sync.errors.slice(0, 3).map(err => `
              <div class="error-item">• ${err.event || 'Unknown'}: ${err.error}</div>
            `).join('')}
            ${sync.errors.length > 3 ? `<div class="error-item">... and ${sync.errors.length - 3} more</div>` : ''}
          </div>
        ` : ''}
      </div>
    `).join('')}
  </div>

  <script>
    async function triggerSync() {
      const btn = document.querySelector('button');
      const msg = document.getElementById('message');

      btn.disabled = true;
      btn.textContent = 'Syncing...';
      msg.style.display = 'none';

      try {
        const res = await fetch('/sync', { method: 'POST' });
        const data = await res.json();

        if (data.success) {
          msg.className = 'success';
          msg.textContent = \`Sync complete! Created: \${data.created}, Updated: \${data.updated}, Deleted: \${data.deleted}\`;
        } else {
          msg.className = 'error';
          msg.textContent = \`Sync failed: \${data.errors?.[0]?.error || 'Unknown error'}\`;
        }
        msg.style.display = 'block';

        // Reload page after 2 seconds to show updated history
        setTimeout(() => window.location.reload(), 2000);

      } catch (error) {
        msg.className = 'error';
        msg.textContent = 'Failed to trigger sync: ' + error.message;
        msg.style.display = 'block';
        btn.disabled = false;
        btn.textContent = 'Sync Now';
      }
    }
  </script>
</body>
</html>
    `;

    res.send(html);
  } catch (error) {
    res.status(500).send('Error loading dashboard: ' + error.message);
  }
});

// Manual sync endpoint
app.post('/sync', async (req, res) => {
  if (syncInProgress) {
    return res.status(429).json({
      success: false,
      error: 'Sync already in progress'
    });
  }

  syncInProgress = true;
  try {
    const result = await runSync();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  } finally {
    syncInProgress = false;
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', syncInProgress });
});

// ============================================
// Cron Job - Every 10 minutes
// ============================================

cron.schedule('*/10 * * * *', async () => {
  if (syncInProgress) {
    console.log('Skipping scheduled sync - another sync is in progress');
    return;
  }

  console.log('\n[CRON] Triggered scheduled sync');
  syncInProgress = true;

  try {
    await runSync();
  } catch (error) {
    console.error('[CRON] Sync failed:', error);
  } finally {
    syncInProgress = false;
  }
});

// ============================================
// Start Server
// ============================================

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════╗
║  Planning Center → Webflow Sync            ║
╟────────────────────────────────────────────╢
║  Dashboard: http://localhost:${PORT}       ║
║  Auto-sync: Every 10 minutes               ║
║  Manual:    POST http://localhost:${PORT}/sync
╚════════════════════════════════════════════╝
  `);
});
