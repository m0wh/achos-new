module.exports = {
  siteMetadata: {
    title: "achos!"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
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
