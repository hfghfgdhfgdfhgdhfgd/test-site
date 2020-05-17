import React from 'react'
//import {Router} from "@reach/router"
import {graphql, useStaticQuery, /*Link*/} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

/*const Test1 = () => <div>
  1
</div>
const Test2 = () => <div>
  2
</div>
const Test3 = () => <div>
  default
</div>
const TestCustom = (data) => {
  console.log(data)
  return (
    <div>
      {data.userId}
    </div>
  )
}*/


export default () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            id
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.allFile.edges[0].node);
  return (
    <Layout>
      <div style={{height: 'auto', width: '100%'}}>
        {data.allFile.edges.map(({node}) => 
          <Img fixed={node.childImageSharp.fixed} key={node.id}/>
        )}
      </div>
    </Layout>
  )
}