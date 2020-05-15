import React from 'react'
import {Router} from "@reach/router"
import {graphql, useStaticQuery, Link} from 'gatsby'
import Layout from '../components/layout'

const Test1 = () => <div>
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
}


export default () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
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
        <Router basepath="/test">
          <Test1 path="/1"/>
          <Test2 path="/2"/>
          <TestCustom path="/2/:userId"/>
          <Test3 path="/" />
        </Router>
        <Link to="/test/1">
          1
        </Link>
        <Link to="/test/2">
          2
        </Link>
        <Link to="/test/2/345834759834">
          3
        </Link>
      </div>
    </Layout>
  )
}