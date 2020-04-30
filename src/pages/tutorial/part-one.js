import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/layout'

export default () => {
  
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `
  )

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }}>
        
      </div>
    </Layout>
  )
}
