import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Kristang Wordlist',
  description: 'A comprehensive digital wordlist for the Kristang language.',
  base: '/kristang-wordlist/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Introduction', link: '/guide' },
          { text: 'Search', link: '/search' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/SyafiqHadzir/kristang-wordlist' }],
  },
});
