// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';



import netlify from '@astrojs/netlify';



// https://astro.build/config
export default defineConfig({
  experimental: {svg: true},
  output: 'server',
  vite: {plugins: [tailwindcss()],},
  adapter: netlify(),
});