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
    <div id="wrapper" style={{
      margin: `auto`,
    }}>
      <Sidebar/>
      <div
        style={{
          marginRight: `20px`,
          maxWidth: 860,
          padding: `45px`,
          float: `right`,
          width: `70%`,
        }}
      >
        <main>{children}</main>
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
