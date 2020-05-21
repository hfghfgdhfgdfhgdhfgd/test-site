import {graphql, useStaticQuery} from 'gatsby';

export default function getImeges () {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            id
            publicURL
            name
          }
        }
      }
    }
  `)
  const imgLinks = {}
  data.allFile.edges.map(edge => {
    imgLinks[edge.node.name] = edge.node.publicURL
  })
  return imgLinks;
}
