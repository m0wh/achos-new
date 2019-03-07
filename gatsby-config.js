require('dotenv').config({
  path: `.env.${ process.env.NODE_ENV }`,
})

module.exports = {
  siteMetadata: {
    title: 'achos!',
    titleTemplate: 'achos&%s!',
    description:
      'achos! attention-grabbing, panty-dropping communication and interactive design agency based in Barcelona and Silicon Bali.',
    url: 'https://www.doe.com', // No trailing slash allowed!
    image: 'src/images/achoslogo.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@achosagency'
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7q0ttflu0eox`,
        accessToken: `${ process.env.ACCESS_TOKEN }`,
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
