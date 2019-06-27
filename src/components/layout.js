/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sidebar from "./sidebar"
import Subscribe from "./subscribe"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div class="container" style={{
      display: `flex`,
      flexWrap: `no-wrap`,
      justifyContent: `flex-start`,
      flexDirection: `row`,
      margin: `auto`,
    }}>
      <Sidebar/>
      <div
      style={{
        width: `900px`,
      }}>
        <main
          style={{
            padding: `45px`,
          }}
          >{children}</main>
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
