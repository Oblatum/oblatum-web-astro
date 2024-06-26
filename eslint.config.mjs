import unocss from '@unocss/eslint-config/flat'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginAstro from 'eslint-plugin-astro';

const compat = new FlatCompat()

export default [
  unocss,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    }
  }
]