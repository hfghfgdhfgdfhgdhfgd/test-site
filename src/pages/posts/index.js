import React from 'react'
import { graphql, Link } from 'gatsby'

export default ({ data: { allFile: { edges } } }) => {
  
  return (
    <div>
      <h1>posts</h1>
      {
        edges.map(post => {
          return <div key={post.node.id}>
            <Link to={post.node.children[0].fields.slug}>
              {post.node.children[0].frontmatter.title}
            </Link>
          </div>
        } )
      }
    </div>
  )
}

export const qruery = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "posts"}, ext: {eq: ".md"}}) {
      edges {
        node {
          id
          children {
            ... on MarkdownRemark {
              html
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    }
  }
`