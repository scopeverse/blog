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
      flexDirection: `row`,
      flexWrap: `wrap`,
      justifyContent: `flex-start`,
      margin: `auto`,
    }}>
      <Sidebar/>
      <div id="page-content" style={{
        display: `flex`,
        flexFlow: `row wrap`,
        paddingLeft: `300px`,
        margin: `auto`,
      }}>
          <main
          style={{
            position: `relative`,
            width: `850px`,
            paddingRight: `45px`,
            top: `45px`,

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
