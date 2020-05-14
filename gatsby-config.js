/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `working`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/src/pages/posts`
      }
    }
    , { resolve: `@hfghfgdhfgdfhgdhfgd/gatsby-theme-minimal`, options: {
      basePath: '/events'
    }},
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`,
  ],
}
