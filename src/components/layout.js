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

      <main style={{
            display: `flex`,
            alignSelf: `flex-start`,
            flexFlow: `row wrap`,
            align: `center`,
            height: `100vh`,
            backgroundColor: `white`,
            zIndex: `100`,
            position: `relative`,
            padding: `45px 45px 45px 25px`,

            overflow: `auto`,
            flex: `2 1 700px`,
      }} > {children}</main>



      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
