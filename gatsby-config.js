module.exports = {
  siteMetadata: {
    siteName: `51外模`,
    slogan: `专业外模平台`,
    title: `51waimo.cn | 51外模，专业外模平台，找外模，上51外模网`,
    description: `51外模是专业的外模平台，涵盖外模平面拍摄，视频拍摄，外籍演艺人才。资源丰富的外模库，友好的模特遴选流程，服务能力覆盖北京、上海、深圳、杭州、广州、成都、重庆等大中城市。`,
    author: `@51外模`,
    beian: `备案号`,
    siteUrl: `https://www.51waimo.cn`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `51waimo.cn | 51外模`,
        short_name: `51外模`,
        start_url: `/`,
        background_color: `#FF8297`,
        theme_color: `#FF8297`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-7F7NXYESYX", // Google Analytics / GA
        ],
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://8.129.79.234:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "model",
          "city",
          "agent",
        ],
        queryLimit: 1000,
      },
    },
  ],
}
