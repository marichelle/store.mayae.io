const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Maya's Vinyl Collection`,
    description: `A personal project used to demonstrate how to build an e-commerce site on the JAMStack.`,
    author: `mayaestalilla@gmail.com`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        display: 'swap',
        fonts: [`Bentham`, `Playfair Display\:400`, `Raleway\:400,500`],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
