module.exports = {
  siteMetadata: {
    title: `Hotscope Blog`,
    siteUrl: `https://blog.hotscope.io`,
    description: `Hotscope is place to rate and find better books, podcasts and online courses so you can spend less time searching and more time learning`,
    author: `@malikpiara`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hotscope Blog`,
        short_name: `Hotscope Blog`,
        start_url: `/`,
        background_color: `#FF8DBD`,
        theme_color: `#FF8DBD`,
        display: `minimal-ui`,
        icon: `src/images/FINAL.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
