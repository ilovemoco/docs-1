// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TokenUp',
  tagline: 'Efficient, convenient and safe',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.payout.plus',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
     en: {
      label: 'English',
      direction: 'ltr',
     },
      zh: {
        label: '中文',
        direction: 'ltr',
      },
    },   
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: '',
      navbar: {
        title: 'TokenUp',
        logo: {
          alt: 'Settlement Logo',
          src: '/img/logo.png',
        },
       
        
        items: [
          {
            to: '/',
            label: 'Docs',
            position: 'left',
            activeBaseRegex: '^(/[^/]+)?/?$',
          },
          {
            to : '/operation/manual',
            label: 'Operation',
            position: 'left',
            activeBaseRegex: '^/operation/manual/',
          },
          {
            to: '/evm/connect',
            label: 'SDK',
            position: 'left',
            activeBaseRegex: '^/(evm|solana|android|ios)/',
          },
          // {
          //   href: 'https://www.npmjs.com/package/@tokenup/web3kit',
          //   label: 'Npm',
          //   position: 'right',
          // },
          {
        type: 'localeDropdown',
        position: 'right',
      },
          
          // {
          //   type: 'localeDropdown', // 添加语言切换器
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} TokenUp.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
