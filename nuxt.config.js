export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'whppt-playground',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [{ src: '~assets/css/tailwind.css' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/whpptPlugins.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // ['@whppt/form-builder', { siteKey: process.env.RECAPTCHA_SITEKEY }],
    '@whppt/layouts',
    '@whppt/sitemaps',
    '@whppt/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  whppt: {
    defaultMargin: { top: { base: 0, sm: 0, lg: 0 }, bottom: { base: 2, sm: 2, lg: 2 } },
  },

  serverMiddleware: { '/': '../server' },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
