import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://akrillick.github.io', 
  base: '/web',
  integrations: [mdx()],
  trailingSlash: 'always',
});