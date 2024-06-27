import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        oblatum: {
          blue: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 592 589"><g transform="translate(-230 -260)"><path style="fill:#4cc2ed;" d="M798,434H732a14,14,0,0,1-13-8A124,124,0,0,0,656,363,14,14,0,0,1,648,350V284c0-21,26-32,41-17L815,393C830,408,819,434,798,434Z" /><path style="fill:#29aae1;" d="M707,500a123,123,0,0,1-36,87l-108,108a123,123,0,1,1-175-175l108-108a123,123,0,0,1,211,87Z"/><path style="fill:#1b93d4;" d="M254,675H320a14,14,0,0,1,13,8A124,124,0,0,0,396,746,14,14,0,0,1,404,759v66c0,21-26,32-41,17L237,716C222,701,233,675,254,675Z" /></g></svg>',
        },
      },
    }),
    presetAttributify(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass(),
  ],
  shortcuts: [{
    'poster-h1': 'text-3xl font-600 line-height-loose',
    'poster-p': 'opacity-65',
  }],
})
