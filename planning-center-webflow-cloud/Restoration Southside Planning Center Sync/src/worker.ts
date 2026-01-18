import type { SSRManifest } from 'astro';
import { App } from 'astro/app';
import { handle } from '@astrojs/cloudflare/handler';

export function createExports(manifest: SSRManifest) {
  const app = new App(manifest);
  return {
    default: {
      async fetch(request, env, ctx) {
        return handle(manifest, app, request, env, ctx);
      },
      async scheduled(event, env, ctx) {
        console.log('Cron triggered at:', new Date().toISOString());
        console.log('Cron expression:', event.cron);
      }
    } satisfies ExportedHandler<Env>,
  };
}
