import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Venster Documentation",
  description: "Get up-to speed with venster and learn how to create DATs",
  themeConfig: {
    logo: {
      light: '/images/venster-named-light-07-optim.svg',
      dark: '/images/venster-named-dark-07-optim.svg'
    },
    siteTitle: false,

    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        text: 'Using DATs',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/using-dats' }
        ]
      },
      {
        text: 'DAT Metadata Standard',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/dat-metadata-standard' },
          { text: 'Specification', link: '/dat-metadata-standard/specification' },
          { text: 'Implementation', link: '/dat-metadata-standard/implementation' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/64ct9tQzgn' },
      { icon: 'github', link: 'https://github.com/venster-io' }
    ]
  }
})
