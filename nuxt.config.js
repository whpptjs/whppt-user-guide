import html from './nuxt/config/html';
import plugins from './nuxt/config/plugins';
import modules from './nuxt/config/modules';
import toast from './nuxt/config/toast';
import build from './nuxt/config/build';
import render from './nuxt/config/render';

export default {
  target: 'server',
  srcDir: 'nuxt/',
  ...html,
  // Global page headers: https://go.nuxtjs.dev/config-head
  // head: {
  //   title: 'whppt-user-guide',
  //   htmlAttrs: {
  //     lang: 'en',
  //   },
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: '' },
  //   ],
  //   link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  // },

  // css: [{ src: '~assets/css/tailwind.css' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/assets/components' },
    {
      path: '~~/sharedComponents',
      ignore: ['**/*.js'],
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/dotenv', { path: './' }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules,
  helmet: {
    frameguard: {
      action: 'sameorigin',
    },
    xssFilter: '1',
  },
  toast,

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  whppt: {
    defaultMargin: {
      top: { base: 0, sm: 0, lg: 0 },
      bottom: { base: 2, sm: 2, lg: 2 },
    },
  },

  serverMiddleware: { '/': '../server' },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build,
  render,
};
