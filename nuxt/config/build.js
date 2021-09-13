// const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

export default {
  transpile: [
    'vue-instantsearch',
    'instantsearch.js/es',
    '@sentry/browser',
    'swiper',
    'vue-awesome-swiper/dist',
    'vue-sticky-directive',
    'dom7',
    '@whppt/nuxt',
    '@whppt/layouts',
    '@whppt/form-builder',
    'highlight',
    /^vue2-google-maps($|\/)/,
    'html-to-text',
    'vue-line-clamp',
    'nanoid',
    'v-calendar-ie11',
    'tiptap',
    'vue-scrollto/nuxt',
  ],
  plugins: [
    // new CaseSensitivePathsPlugin()
  ],
  publicPath: process.env.BASE_CDN_URL,
};
