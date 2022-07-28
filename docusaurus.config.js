/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'S.K.Y',
  tagline:
    'I am a Software Engineer and Cloud Engineer passionate about solving Meaningful Problems in development and automation.',
  url: 'https://sandeepyaramchitti.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/braces.png',
  organizationName: 'SandeepKumarYaramchitti',
  projectName: 'SandeepKumarYaramchitti',
  themeConfig: {
    navbar: {
      title: 'S.K.Y',
      logo: {
        alt: 'sandeep-logo',
        src: 'img/braces.png',
      },
      items: [
        {
          label: 'Docs',
          position: 'left',
          items: [
            {
              label: 'Development',
              to: '/docs/development/',
            },
            {
              label: 'AWS',
              to: '/docs/aws/',
            },
            {
              label: 'Web3.0',
              to: '/docs/web3/',
            },
            {
              label: 'Test Automation',
              to: '/docs/test-automation/',
            },
          ],
        },
        {
          label: 'Learn',
          position: 'left',
          items: [
            {
              label: 'Learn to Code',
              to: '/docs/learn-to-code/',
            },
            {
              label: 'Technology',
              to: '/docs/technology/',
            },
            {
              label: 'Reading List',
              to: '/docs/reading-list/',
            },
          ],
        },
        {
          label: 'Explore',
          position: 'left',
          items: [
            {
              label: 'Travel',
              to: '/docs/travel/',
            },
            {
              label: 'Music',
              to: '/docs/music/',
            },
            {
              label: 'Reading List',
              to: '/docs/reading-list/',
            },
          ],
        },
        {
          href: 'https://github.com/SandeepKumarYaramchitti/my-portfolio',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://github.com/SandeepKumarYaramchitti/my-portfolio',
          label: 'Twitter',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/channels/1002001395618168893/1002001395618168896',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sandeep01957280',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/SandeepKumarYaramchitti/my-portfolio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sandeep Yaramchitti`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
