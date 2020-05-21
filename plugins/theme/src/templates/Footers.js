import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const getFooterData = () => {
  const data = useStaticQuery(graphql`
    query {
      allYml(filter: {type: {eq: "footerData"}}) {
        edges {
          node {
            footerText
            links {
              nameLink
              path
              id
            }
          }
        }
      }
    }
  `)
  return data.allYml.edges[0].node  
}

export default {
  Footer1: () => {
    const {footerText, links} = getFooterData();

    return (
      <footer className="footer">
        <div className="container">
          <div className="row gap-y align-items-center">

            <div className="col-md-3 text-center text-md-left">
              <a href="#"></a>
            </div>

            <div className="col-md-6">
              <div className="nav nav-center">
                {
                  links.map(link => <Link className="nav-link" to={link.path}>
                    {link.nameLink}
                  </Link>)
                }
              </div>
            </div>

            <div className="col-md-3 text-center text-md-right">
              <small>© 2020. All rights reserved.</small>
            </div>

          </div>
        </div>
      </footer>
    )
  },
  Footer2: () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row gap-y align-items-center">

            <div className="col-md-6 text-center text-md-left">
              <small>© TheThemeio 2020, All rights reserved.</small>
            </div>

            <div className="col-md-6 text-center text-md-right">
              <div className="social">
                <a className="social-facebook" href="#"><i className="fa fa-facebook"></i></a>
                <a className="social-twitter" href="#"><i className="fa fa-twitter"></i></a>
                <a className="social-instagram" href="#"><i className="fa fa-instagram"></i></a>
                <a className="social-youtube" href="#"><i className="fa fa-youtube"></i></a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    )
  },
  Footer3: () => {
    const {footerText, links} = getFooterData();

    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">

              <div className="nav nav-bold nav-uppercase nav-center">
                <a className="nav-link" href="#">About</a>
                {
                  links.map(link => <Link key={link.id} className="nav-link" to={link.path}>
                    {link.nameLink}
                  </Link>)
                }
              </div>

              <hr/>

              <p className="text-center">
                {footerText}
              </p>

            </div>
          </div>
        </div>
      </footer>
    )
  }
}