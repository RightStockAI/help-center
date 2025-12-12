import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'RightStockAI Documentation',
  tagline: 'AI-Powered Stock Analysis for Indian Markets',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rightstockai.github.io',
  
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/help-center/',
  
  // GitHub pages deployment config
  organizationName: 'RightStockAI', // Your GitHub org/user name
  projectName: 'help-center', // Your repo name
  
  deploymentBranch: 'gh-pages', // The branch GitHub Pages will use
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Docs-only mode
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',

    navbar: {
      title: 'RightStockAI Help',
      logo: {
        alt: 'RightStockAI Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://rightstockai.com',
          label: 'Back to App',
          position: 'right',
        },
        {
          href: 'https://github.com/dhananjaym182/RightStockAI',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Help Center',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started/account-setup',
            },
            {
              label: 'Features',
              to: '/features/stock-analysis',
            },
            {
              label: 'FAQ',
              to: '/help/faq',
            },
          ],
        },
        {
          title: 'RightStockAI',
          items: [
            {
              label: 'Dashboard',
              href: 'https://rightstockai.com/dashboard',
            },
            {
              label: 'Pricing',
              href: 'https://rightstockai.com/pricing',
            },
            {
              label: 'Privacy Policy',
              href: 'https://rightstockai.com/privacy-policy',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dhananjaym182/RightStockAI',
            },
            {
              label: 'Contact Support',
              href: 'mailto:hello@rightstockai.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RightStockAI. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },


  } satisfies Preset.ThemeConfig,
};

export default config;
