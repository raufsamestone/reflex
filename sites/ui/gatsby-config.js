require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Reflex UI",
    description:
      "A tiny library for creating and styling UI components with Theme UI.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        types: [`Page`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Reflex UI - A tiny library for creating and styling UI components with Theme UI.`,
        short_name: `Reflex UI`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `content/images/favicon.png`,
      },
    },
  ],
}
