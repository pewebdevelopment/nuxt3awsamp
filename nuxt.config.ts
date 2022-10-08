// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: ["@/assets/css/main.css"],

  plugins: [
    { src: '~/plugins/amplify.js', mode: 'client' }
  ],

  buildModules: [
   
    
  ],


  //Sometimes polyfill.js may throw an error at buildtime. That error reference is mentioned below:
  // https://github.com/nuxt/framework/discussions/2308#discussioncomment-1822271

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


  // Nuxt 3 uses Vite under the hood, hence we have to use the following to configure vite settings
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
      'window.global': {} // using window.global is much better as stated here: https://github.com/nuxt/framework/discussions/2308#discussioncomment-2766426
    }
}
});


