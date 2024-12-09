import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://Astro_Demo_Project.github.io',
  base: 'https://github.com/ptejalaxioned/Astro_Demo_Project.git',
  integrations: [react(), vue()],
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname, // This sets up the alias
      },
    },
  },
});
