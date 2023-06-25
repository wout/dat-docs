import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Venster Documentation',
  description: 'Get up-to speed with Venster and learn how to create DATs',
  themeConfig: {
    logo: {
      light: '/logo/venster-named-light-07-optim.svg',
      dark: '/logo/venster-named-dark-07-optim.svg',
    },

    siteTitle: false,

    search: {
      provider: 'local',
    },

    sidebar: [
      {
        text: 'Introduction to DATs',
        collapsed: true,
        items: [
          { text: "What's DAT?", link: '/dats' },
          { text: 'Examples', link: '/dats/examples' },
        ],
      },
      {
        text: 'DAT Metadata Standard',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/dat-metadata-standard' },
          {
            text: 'Specification',
            link: '/dat-metadata-standard/specification',
          },
          {
            text: 'Rationale',
            link: '/dat-metadata-standard/rationale',
          },
          {
            text: 'Metadata examples',
            link: '/dat-metadata-standard/examples',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/64ct9tQzgn' },
      { icon: 'github', link: 'https://github.com/venster-io' },
    ],
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
    [
      'link',
      { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#363c31' },
    ],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'venster' }],
    ['meta', { name: 'application-name', content: 'venster' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    [
      'script',
      {
        defer: '',
        'data-api': '/api/event',
        'data-domain': 'docs.venster.art',
        src: '/js/script.js',
      },
    ],
  ],
})
