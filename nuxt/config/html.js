export default {
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/whpptLogo.png' },
      { rel: 'stylesheet', href: '/css/focusRing.css' },
      // rel="preload" as="image" href="important.png"
    ],
    script: [
      {
        src: 'https://polyfill.io/v3/polyfill.min.js?features=es6',
        defer: true,
      },

      { src: '/js/focusRing.js', defer: true },
    ],
  },
  css: [
    // { src: '~assets/css/fonts.css', preload: true },
    { src: '~assets/css/tailwind.css' },
    // { src: '~/assets/css/richText.scss' },
    // 'vue-select/src/scss/vue-select.scss',
  ],
};
