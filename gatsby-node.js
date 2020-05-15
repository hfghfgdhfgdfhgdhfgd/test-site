const path = require(`path`)
const fetch = require('node-fetch')
const { createFilePath } = require(`gatsby-source-filesystem`)

/*exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions
    const typeDefs = [
      schema.buildObjectType({
        name: 'custommmmmmmmmmmmmmmmmmmmmmmmmmmm',
        interfaces: ['Node'],
        extensions: {
          infer: false,
        },
      })
    ]
    createTypes(typeDefs)
  }
  createTypes(typeDefs)
}*/
exports.sourceNodes = ({node, actions, createNodeId, createContentDigest }) => {
  console.log(node, '<- node!111111!');
  actions.createTypes(`
    type TEST implements Node @dontInfer {
      name: String!
    }
  `)
  actions.createTypes(`
    type Gatsby implements Node @dontInfer {
      name: String!
    }
  `)
  actions.createTypes(`
    type jhghjh implements Node @dotInger {
      name: String!
      nysho: String!
    }
  `)
  actions.createNode({
    name: 'test12312312312312sdfg',
    nysho: 'test',
    id: createNodeId('custom-123'),
    internal: {
      type: 'jhghjh',
      contentDigest: createContentDigest('123'),
    }
  })
  actions.createNode({
    name: 'test12312312312312sdf23432423g',
    nysho: 'test',
    id: createNodeId('custom-1234'),
    internal: {
      type: 'jhghjh',
      contentDigest: createContentDigest('123'),
    }
  })
  const pokemons = [
    { name: "Pikachu" },
    { name: "Squirtle" },
  ]

  pokemons.forEach(pokemon => {
    const node = {
      name: pokemon.name,
      id: createNodeId(`SiteBar-${pokemon.name}`),
      internal: {
        type: "TEST",
        contentDigest: createContentDigest(pokemon),
      },
    }
    actions.createNode(node)
  })

}

exports.onCreateNode = ({ node, getNode, actions, createNodeId, createContentDigest }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    console.log(slug, '<- this slug');
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    actions.createNode({
      name: 'test12312312312312sdfg'+slug,
      nysho: 'test',
      id: createNodeId('custom-123' + slug),
      internal: {
        type: 'o',
        contentDigest: createContentDigest('123' + slug),
      }
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
      component: path.resolve(`./src/pages/posts/.post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}