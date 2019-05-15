const path = require('path')

require('dotenv').config({
  path: `.env.${ process.env.NODE_ENV }`,
})

module.exports = {
  siteMetadata: {
    title: 'achos!',
    titleTemplate: 'achos & %s!',
    description:
      'achos! attention-grabbing, panty-dropping communication and interactive design agency based in Barcelona and Silicon Bali.',
    url: 'https://www.doe.com', // No trailing slash allowed!
    image: 'src/images/achoslogo.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@achosagency'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locationimages`,
        path: `${ __dirname }/src/images/locations`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${ __dirname }/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aboutimages`,
        path: `${ __dirname }/src/images/about`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `clients`,
        path: `${ __dirname }/src/images/clients`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${ __dirname }/src/projects`
      }
    },

    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 830,
              quality: 70,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          // TODO: Replace with "mdx-component-autolink-headers"
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              maintainCase: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'achos!',
        short_name: 'achos!',
        start_url: '/',
        background_color: '#333',
        theme_color: '#333',
        display: 'minimal-ui',
        icon: 'src/images/achoslogo.png' // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
}
