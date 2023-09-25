const config = require('./developer.json')
const siteTitle = `${config.name} | ${config.role}`


/*
 * Nuxt 3 Config File
 Usage: https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({

  /**
   * * App Config
   * app config: https://nuxt.com/docs/api/configuration/nuxt-config#app
   * head config: https://nuxt.com/docs/api/configuration/nuxt-config#head
   * meta config: https://nuxt.com/docs/getting-started/seo-meta
   * pageTransition config: https://nuxt.com/docs/getting-started/transitions#transitions
   * TODO: Add more meta tags for SEO
   * TODO: Add tags for social media sharing
   * TODO: Migrate apple-touch-icon config to manifest.json
   */
  app: {
    head: {
      title: siteTitle, // App window nav title
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'aDg-Kty_BgtyE7zy4alBql8cK5uPH2F5x2lsYwFU-OY' },

        { hid: 'description', name: 'description', content: 'Eftakhar Ahmed Arnob\'s Personal Website.' },
        { hid: 'og:title', property: 'og:title', content: siteTitle },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Eftakhar Ahmed Arnob' },
        { hid: 'og:description', property: 'og:description', content: 'Eftakhar Ahmed Arnob\'s Personal Website.' },
        { hid: 'og:image', property: 'og:image', content: 'demo-share.jpg' },
        { hid: 'og:url', property: 'og:url', content: 'https://arnob.dev/' },

        { hid: 'twitter:title', property: 'twitter:title', content: siteTitle },
        { hid: 'twitter:site_name', property: 'twitter:site_name', content: 'Eftakhar Ahmed Arnob' },
        { hid: 'twitter:description', property: 'twitter:description', content: 'Eftakhar Ahmed Arnob\'s Personal Website.' },
        { hid: 'twitter:image', property: 'twitter:image', content: 'demo-share.jpg' },
        { hid: 'twitter:url', property: 'twitter:url', content: 'https://arnob.dev/' },

        { name: 'theme-color', content: '#010C15' },
        // ...
      ],
      link: [
        { rel: 'manifest', href: 'pwa/manifest.json' },
        { rel: 'apple-touch-icon', href: 'pwa/icons/apple-touch-icon.png' },
      ],
    },
  },

  /**
   * * Nuxt 3 Modules
   * Official modules: https://nuxt.com/modules
   */
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  components: {
    dirs: [
      '~/components',
    ],
  },

  /**
   * * Tailwind CSS Config
   * Options: https://tailwindcss.nuxt.dev/getting-started/options/
   * Docs: https://tailwindcss.nuxt.dev
   */
  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true, // true to resolve the tailwind config in runtime. https://tailwindcss.nuxt.dev/getting-started/options/#exposeconfig
    injectPosition: 0,
    viewer: false,
  },

  /**
   * * Runtime Config (Environment Variables)
   * Usage: https://nuxt.com/docs/guide/going-further/runtime-config
   */
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
      dev: config
    }
  }
})
