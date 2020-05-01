import React from "react"
import {graphql, Link} from 'gatsby'

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(data);
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/posts"><button>back posts</button></Link>
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`