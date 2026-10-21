// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hesedcore.com',
  compressHTML: true,
  vite: {
    define: {
      'import.meta.env.VERCEL': JSON.stringify(process.env.VERCEL ?? '')
    },
    plugins: [tailwindcss()]
  }
});