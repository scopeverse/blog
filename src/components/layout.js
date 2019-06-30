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
      height: `100vh`,
      flexFlow: `row wrap`,
      justifyContent: `flex-start`,
      margin: `auto`,
      flex: `1 100%;`,
    }}>
      <Sidebar/>
      <div id="page-content" style={{
        display: `flex`,
        margin: `auto`,
        height: `100vh`,
      }}>
          <main
          style={{
            position: `relative`,
            width: `850px`,
            paddingRight: `45px`,
            paddingBottom:  `45px`,
            marginTop: `45px`,
            marginLeft: `45px`,
            overflow: `auto`,
            flex: `1 1 auto`,
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
