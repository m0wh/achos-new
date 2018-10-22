module.exports = {
  siteMetadata: {
    title: "achos!"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // {
          //   resolve: "gatsby-remark-images",
          //   options: {
          //     maxWidth: 820,
          //     quality: 90,
          //     withWebp: true
          //   }
          // },

          {
            resolve: "gatsby-remark-responsive-iframe"
          }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "achos!",
        short_name: "achos!",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/achoslogo.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline"
  ]
};
