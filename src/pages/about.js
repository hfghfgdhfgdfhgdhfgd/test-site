import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

const Wrap = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allFile {
        edges {
          node {
            id
            name
            size
            base
          }
        }
      }
    }
  `)
  console.log(data)
  return <Wrap>
    <h2>
      {data.site.siteMetadata.title}
    </h2>
    {
      data.allFile.edges.map(({ node: {id,base,name,size} }) => <div key={id}>
        <h1>{base}</h1>
        name: {name}
        <br/>
        size: {size}
        <br/>
        id: {id}
      </div>)
    }
  </Wrap>
}


