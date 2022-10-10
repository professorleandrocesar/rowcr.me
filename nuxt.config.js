export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  telemetry: false,
  loading: {
    background: '#ffffff',
    color: '#000000',
    height: '5px',
    continuous: true,
    duration: 3000
  },


  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RowCr.me',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'description', content: 'Acupuntura' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '' },
      { rel: 'apple-touch-icon', size: '180x180', href: '' },
      { rel: 'icon', type: 'image/svg', size: '32x32', href: '' },
      { rel: 'icon', type: 'image/svg', size: '16x16', href: '' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon.svg' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Philosopher&display=swap' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/da2962ce7f.js' },
      { src: '/index.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/normalize.css',
    '@/assets/style.css',
    // '@/assets/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
