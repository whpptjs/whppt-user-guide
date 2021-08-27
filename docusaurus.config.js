const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Whppt User Guide",
  tagline: "Built for purpose.",
  url: "https://userguide.whppt.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "svelte-studios", // Usually your GitHub org/user name.
  projectName: "whppt-user-guide", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Whppt",
      logo: {
        alt: "Whppt",
        src: "img/whpptLogo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "User Guide",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "User Guide",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com",
            },
            {
              label: "Twitter",
              href: "https://twitter.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Whppt.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
