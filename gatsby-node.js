const _ = require('lodash')
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  // Only use MDX nodes
  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent)
    // If the frontmatter contains a "slug", use it
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${ _.kebabCase(node.frontmatter.slug) }`
    }
    // Otherwise use the title for the slug
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${ _.kebabCase(node.frontmatter.title) }`
    }
    createNodeField({ node, name: 'slug', value: slug })
    // Adds the name of "gatsby-source-filesystem" as field (in this case "projects" or "pages")
    createNodeField({ node, name: 'sourceInstanceName', value: fileNode.sourceInstanceName })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Our templates for projects and files inside /pages/*.mdx
  const projectPage = require.resolve('./src/templates/projectpage.js')

  const result = await wrapper(
    graphql(`
      {
        projects: allMdx(filter: { fields: { sourceInstanceName: { eq: "projects" } } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  )

  result.data.projects.edges.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: projectPage,
      context: {
        // Pass "slug" through context so we can reference it in our query like "$slug: String!"
        slug: edge.node.fields.slug,
      },
    })
  })
}
