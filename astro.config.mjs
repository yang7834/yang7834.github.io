import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://yang7834.github.io',
  base: '/',
  integrations: [sitemap()],
});
