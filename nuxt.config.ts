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
      title: siteTitle,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'aDg-Kty_BgtyE7zy4alBql8cK5uPH2F5x2lsYwFU-OY' },
        { hid: 'description', name: 'description', content: 'Eftakhar Ahmed Arnob\'s Personal Website.' },
        { hid: 'og:title', property: 'og:title', content: siteTitle },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Eftakhar Ahmed Arnob' },
        { hid: 'og:description', property: 'og:description', content: 'Eftakhar Ahmed Arnob\'s Personal Website.' },
        { hid: 'og:image', property: 'og:image', content: 'https://arnob.dev/demo-share.jpg' },
        { hid: 'og:url', property: 'og:url', content: 'https://arnob.dev/' },
        { hid: 'twitter:title', property: 'twitter:title', content: siteTitle },
        { hid: 'twitter:site_name', property: 'twitter:site_name', content: 'Eftakhar Ahmed Arnob' },
        { hid: 'twitter:description', property: 'twitter:description', content: 'Eftakhar Ahmed Arnob\'s Personal Website.' },
        { hid: 'twitter:image', property: 'twitter:image', content: 'https://arnob.dev/demo-share.jpg' },
        { hid: 'twitter:url', property: 'twitter:url', content: 'https://arnob.dev/' },
        { name: 'theme-color', content: '#010C15' },
        // ... (other meta tags)
      ],
      link: [
        { rel: 'manifest', href: 'pwa/manifest.json' },
        { rel: 'apple-touch-icon', href: 'https://arnob.dev/logo.png' },
      ],

      // Add your JSON-LD structured data script here
      script: [
        {
          hid: 'json-ld-structured-data', // Unique identifier for the script
          innerHTML: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Eftakhar Ahmed Arnob",
            "alternateName": "ArnabXero",
            "url": "https://arnob.dev/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://arnob.dev/{search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }),
          type: 'application/ld+json',
        }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  components: {
    dirs: [
      '~/components',
    ],
  },

  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true,
    injectPosition: 0,
    viewer: false,
  },

  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api',
      dev: config
    }
  }
})
