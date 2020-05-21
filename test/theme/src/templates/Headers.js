import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import getImages from '../functions/common';

const getHeaderData = () => {
  const data = useStaticQuery(graphql`
    query {
      allYml(filter: {type: {eq: "headerData"}}) {
        edges {
          node {
            id
            title
            imgName
            underTitle
          }
        }
      }
    }`)
  return data.allYml.edges[0].node
}

export default {
  Header1: () => {
    const {title, underTitle, imgName} = getHeaderData();
    const links = getImages();
    console.log(getImages());

    return (
      <header className="header text-white" data-overlay="6">
        <div className="container text-center">

          <div className="row">
            <div className="col-md-8 mx-auto">

              <h1>{title}</h1>
              <p className="lead-2 opacity-90 mt-6">{underTitle}</p>

            </div>
          </div>

        </div>
      </header>
    )
  },
  Header2: () => {
    const {title, underTitle} = getHeaderData();

    return (
      <header className="header">
        <div className="container">
          <h1 className="display-4">{title}</h1>
          <p className="lead-2 mt-6">{underTitle}</p>
        </div>
      </header>
    )
  },
  Header3: () => {
    const {title, underTitle, imgName} = getHeaderData();
    const links = getImages();

    return (
      <header className="header text-white"
              data-overlay="6"
              style={{
                backgroundImage: `url(${links[imgName]})`
              }}
      >
        <div className="container text-center">

          <div className="row">
            <div className="col-md-8 mx-auto">

              <h1>{title}</h1>
              <p className="lead-2 opacity-90 mt-6">{underTitle}</p>

            </div>
          </div>

        </div>
      </header>
    )
  }
}