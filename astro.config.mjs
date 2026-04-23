import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://akrillick.github.io', 
  base: '/web',
  integrations: [mdx()],
  trailingSlash: 'always',
  vite: {
    optimizeDeps: {
      include: [
        'astro/runtime/client/dev-toolbar/entrypoint.js',
        'astro/virtual-modules/transitions-router.js',
        'astro/virtual-modules/transitions-types.js',
        'astro/virtual-modules/transitions-events.js',
        'astro/virtual-modules/transitions-swap-functions.js',
      ],
    },
  },
});