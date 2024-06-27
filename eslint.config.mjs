import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  typescript: true,
  astro: true,
  react: true,
  // vue: true,
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
    semi: false,
  },
})
