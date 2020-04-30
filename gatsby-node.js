const path = require(`path`)
const fetch = require('node-fetch')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
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
  const servers = await fetch('https://nifty-meitner-893620.netlify.app/api/extension/proxy', {
    headers: {
      authorization: "Bearer " + `1238763248723643827`,
    },
  }).then(data => data.json());
  // https://nifty-meitner-893620.netlify.app/api/extension/proxy
  console.log(servers);
    createPage({
      path: '/servers',
      component: path.resolve('./src/components/servers.js'),
      context: {
        servers
      }
    })
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/templates.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}