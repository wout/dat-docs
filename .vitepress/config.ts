import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'DAT Medadata Standard',
  description: 'Get up-to speed and learn how to create DATs',
  themeConfig: {
    siteTitle: 'DAT Metadata Standard',

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
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/wout/dat-docs' }],
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
    [
      'meta',
      { name: 'apple-mobile-web-app-title', content: 'DAT Metadata Standard' },
    ],
    ['meta', { name: 'application-name', content: 'DAT Metadata Standard' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    [
      'script',
      {
        defer: '',
        'data-api': '/api/event',
        'data-domain': 'dat-docs.wout.codes',
        src: '/js/script.js',
      },
    ],
  ],
})
