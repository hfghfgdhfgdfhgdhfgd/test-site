import React from 'react'
import {useStaticQuery, graphql} from 'gatsby';


const getFAQData = () => {
  const data = useStaticQuery(graphql`
    query {
      allYml(filter: {type: {eq: "FAQdata"}}) {
        edges {
          node {
            id
            title
            underTitle
            questions {
              id
              anser
              question
            }
          }
        }
      }
    }
  `)
  return data.allYml.edges[0].node
}

export default {
  FAQ: () => {
    const faqData = getFAQData();

    return (
      <section className="section">
        <div className="container">
          <header className="section-header">
            <small>FAQ</small>
            <h2>{faqData.title}</h2>
            <hr/>
            <p>{faqData.underTitle}</p>
          </header>


          <div className="row gap-y">
            {faqData.questions.map(({question, anser, id}) => (
              <div key={id} className="col-md-6">
                <h5>{question}</h5>
                <p>{anser}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    )
    
  },
  Galler: () => {
    const faqData = getFAQData();

    return (
      <section id="lity" className="section">
        <div className="container">
          <div className="row gap-y align-items-center">

            <div className="col-lg-5 mr-auto">
              <h2>{faqData.title}</h2>
              <br/>
              <p>{faqData.underTitle}</p>
            </div>

            <div className="col-lg-6">

              <div className="gallery gallery-4-type4">
                
              </div>

            </div>

          </div>
        </div>
      </section>
    )
  },
  Process: () => {
    const faqData = getFAQData();

    return (
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h2>{faqData.title}</h2>
            <hr/>
            <p className="lead">{faqData.underTitle}</p>
          </header>


          <div className="row gap-y">
            {faqData.questions.map(({question, anser, id}) => (
              <div key={id} className="col-md-6 col-xl-4">
                <div className="media">
                  <div className="mr-5">
                    <span className="iconbox iconbox-lg bg-pale-primary text-primary"><i className="fa fa-file-text-o"></i></span>
                  </div>
                  <div className="media-body">
                    <h6>{question}</h6>
                    <p>{anser}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}