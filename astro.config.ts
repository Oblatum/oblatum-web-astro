import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro'
import lit from "@astrojs/lit";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true // or a path to the reset file
    }),
    lit(),
    solidJs()
  ]
});