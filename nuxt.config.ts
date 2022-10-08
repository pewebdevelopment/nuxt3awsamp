// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: ["@/assets/css/main.css"],

  plugins: [
    { src: '~/plugins/amplify.js', mode: 'client' }
  ],

  buildModules: [
   
    
  ],

  // meta: {
  //   script: [
  //     { src: './js/polyfills.js' },
  //   ],
  // },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  vite: {
    resolve: {
        alias: {
            './runtimeConfig': './runtimeConfig.browser'
        }
    },
    // temp-fix for dev, it breaks build for now (see: https://github.com/nuxt/framework/issues/4916)
    // define: {
    //     global: {}
    // }

    define: {
      'window.global': {}
    }
}
});


