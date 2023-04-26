// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reincarnation+#Tech',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  
  projectName: 'fereria.github.io',
  organizationName: 'reincarnation_tech_dev',
  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://fereria.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/reincarnation_tech_dev',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fereria', // Usually your GitHub org/user name.
  projectName: 'reincarnation_tech_dev', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  i18n: {
    defaultLocale: 'ja',
    locales: ['en', 'ja'],
  },  

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateTime: true, // この行を追加
          showLastUpdateAuthor: true, // お好みでこちらも          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Reincarnation+#Tech りにゅーある中',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        // Tab を追加する場合はここに追加
        items: [
          {
            to: '/dcc',
            sidebarId: 'dccSidebar',
            position: 'left',
            label: 'DCCTool',
          },
          {
            to: '/pipeline',
            label: 'Pipeline',
            sidebarId: 'pipelineSidebar',
            position:'left'
          },
          {
            to : '/pg',
            sidebarId: 'programmingSidebar',
            position: 'left',
            label: 'Programming',
          },
          // Blog
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/fereria/reincarnation_tech_dev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'SocialMedia',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/fereria',
              },
              {
                label: 'Reincarnation+#Tech',
                href: 'https://fereria.github.io/reincarnation_tech/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/fereria/reincarnation_tech',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Reincarnation#Tech, Built with Megumi Ando.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    // plugins:[
    //   [
    //     // ディレクトリを docs 以外にも配置できるようにする
    //     '@docusaurus/plugin-content-docs',
    //     {
    //       id: 'article',
    //       path: 'article',
    //       routeBasePath: 'article',
    //       editCurrentVersion: true,
    //       sidebarPath: require.resolve('./article/sidebars.js'),
    //       showLastUpdateAuthor: true,
    //       showLastUpdateTime: true,
    //     },
    //   ],
    // ]
};

module.exports = config;
