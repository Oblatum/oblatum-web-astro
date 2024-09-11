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
          blue: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 589 589"><g transform="translate(-230 -260)"><path style="fill:#4cc2ed;" d="M798,434H732a14,14,0,0,1-13-8A124,124,0,0,0,656,363,14,14,0,0,1,648,350V284c0-21,26-32,41-17L815,393C830,408,819,434,798,434Z" /><path style="fill:#29aae1;" d="M707,500a123,123,0,0,1-36,87l-108,108a123,123,0,1,1-175-175l108-108a123,123,0,0,1,211,87Z"/><path style="fill:#1b93d4;" d="M254,675H320a14,14,0,0,1,13,8A124,124,0,0,0,396,746,14,14,0,0,1,404,759v66c0,21-26,32-41,17L237,716C222,701,233,675,254,675Z" /></g></svg>',
        },
        tencent: {
          qq: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a6.285 6.285 0 0 0-6.276 5.937l-.146 2.63a28 28 0 0 0-.615 1.41c-1.24 3.073-1.728 5.773-1.088 6.032.335.135.913-.426 1.566-1.432a6.67 6.67 0 0 0 1.968 3.593c-1.027.35-1.91.828-1.91 1.33 0 .509 2.48.503 4.239.5h.001c.549-.002 1.01-.008 1.38-.057a6.7 6.7 0 0 0 1.76 0c.37.05.833.055 1.382.056 1.76.004 4.239.01 4.239-.499 0-.502-.883-.979-1.909-1.33a6.67 6.67 0 0 0 1.967-3.586c.65 1.002 1.227 1.56 1.56 1.425.64-.259.154-2.96-1.088-6.032a28 28 0 0 0-.607-1.395l-.147-2.645A6.285 6.285 0 0 0 12 2"/></svg>',
          txc: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 36"><defs><mask id="m"><rect width="100%" height="100%" fill="white"></rect><path d="M25.056 4.263c-1.656 4.842-5.795 9.047-10.39 10.024 0 0 2.11.892 2.608 1.996.318.71 1.49 1.893 3.515 3.553.05.04 1.396.603 4.04 1.687v7.564a2.45 2.45 0 01-2.45 2.449H16.68l-2.967-6.502c-.717-.68-1.504-1.02-2.36-1.02-.272 0-.6.01-.96.011h-.155c-1.314-.005-2.984-.149-3.893-1.243-.8-.962-1.187-1.713-1.16-2.25.635-.794 1.022-1.46 1.16-1.997.207-.807 1.655-2.719 2.649-3.271s1.16-.85 1.946-.85S21.536 4.586 25.305.143c.211-.249 1.407-.722-.249 4.12z" fill="black"></path></mask></defs><g fill="none" fill-rule="evenodd" mask="url(#m)"><path d="M0 10.498a2.722 2.722 0 012.722-2.722h19.18a2.722 2.722 0 012.722 2.722v18.035a2.722 2.722 0 01-2.722 2.721H6.347l-4.409 5.5A1.089 1.089 0 010 36.074V10.497z" fill="currentColor"></path></g><path fill="currentColor" d="M10.152 17.28a1.08 1.08 0 100 2.16 1.08 1.08 0 100-2.16z"></path></svg>',
        },
        telegram: {
          logo: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427-1.018-.553-2.53-1.405-3.89-2.294-.68-.445-2.763-1.87-2.507-2.884.22-.867 3.72-4.125 5.72-6.062.785-.761.427-1.2-.5-.5-2.302 1.738-5.998 4.381-7.22 5.125-1.078.656-1.64.768-2.312.656-1.226-.204-2.363-.52-3.291-.905-1.254-.52-1.193-2.244-.001-2.746z" fill-rule="evenodd"/></svg>',
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
