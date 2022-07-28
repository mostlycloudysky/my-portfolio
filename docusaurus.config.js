/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'S.K.Y',
  tagline:
    'I am a Software Engineer and Cloud Engineer passionate about solving Meaningful Problems in development and automation.',
  url: 'https://sandeepyaramchitti.netlify.app',
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
              to: 'development/react',
            },
            {
              label: 'AWS',
              to: 'aws/test',
            },
            {
              label: 'Web3.0',
              to: 'web3/test',
            },
            {
              label: 'Test Automation',
              to: 'test-automation/test',
            },
          ],
        },
        {
          label: 'Learn',
          position: 'left',
          items: [
            {
              label: 'Learn to Code',
              to: 'learn-to-code/test',
            },
            {
              label: 'Technology',
              to: 'technology/test',
            },
            {
              label: 'Reading List',
              to: 'reading-list/test',
            },
          ],
        },
        {
          label: 'Explore',
          position: 'left',
          items: [
            {
              label: 'Travel',
              to: 'travel/test',
            },
            {
              label: 'Music',
              to: 'music/test',
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
          title: 'About Me',
          items: [
            {
              label: 'Introduction',
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
