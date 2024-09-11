import node from '@astrojs/node'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
    react(),
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    css: {
      transformer: 'lightningcss',
    },
  },
})
