import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// Update `site` to your deployed URL (e.g. https://yourdomain.com)
export default defineConfig({
  site: 'https://username.github.io',
  integrations: [tailwind(), mdx()],
});
