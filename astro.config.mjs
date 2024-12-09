import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://ptejalaxioned/Astro_Demo_Project.github.io',
  base: 'my-repo',
  integrations: [react(), vue()],
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname, // This sets up the alias
      },
    },
  },
});
