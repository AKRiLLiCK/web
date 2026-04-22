import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://AKRiLLiCK.github.io', 
  base: '/web', 
  integrations: [mdx()],
  trailingSlash: 'always',
});