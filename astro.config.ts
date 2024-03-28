import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import lit from "@astrojs/lit";
import solidJs from "@astrojs/solid-js";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true // or a path to the reset file
    }), 
    lit(), 
    solidJs()
  ],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  vite: {
    css: {
      transformer: "lightningcss",
    },
  },
  server: {
    host:"10.10.92.67"
  }
});