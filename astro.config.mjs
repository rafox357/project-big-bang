import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/project-big-bang',
  integrations: [
    react({
      include: ['**/react/**', '**/accessibility/**', '**/interactive/**']
    }), 
    tailwind()
  ],
});