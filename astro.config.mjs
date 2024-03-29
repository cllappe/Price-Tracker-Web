import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import svelte from "@astrojs/svelte";


// https://astro.build/config
export default defineConfig({
  output: 'server',

  integrations: [svelte()],
  adapter: netlify()
});