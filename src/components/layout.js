/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteName
          slogan
          beian
        }
      }
      allStrapiCity(limit: 10, sort: {order: ASC, fields: Sort}) {
        edges {
          node {
            DisplayName
          }
        }
      }
    }
  `)

  const cities = data.allStrapiCity.edges;

  return (
    <>
      <Header 
        siteName={data.site.siteMetadata?.siteName || `51waimo.cn`}
        slogan={data.site.siteMetadata?.slogan || ``}
        cities={cities}
      />
      {children}
      <Footer 
        siteName={data.site.siteMetadata?.siteName || `51waimo.cn`} 
        beian={data.site.siteMetadata?.beian || ``}
        cities={cities}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
