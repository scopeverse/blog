import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/image"

const Sidebar = ({ }) => (
  <aside
    style={{
      width: `30%`,
      height: `100%`,
      position: `fixed`,
      float: `left`,
      padding: `20px`,
    }}
  >
    <div
      style={{
        marginLeft: `20px`,
        maxWidth: 200,
        padding: `1.45rem 1.0875rem`,
      }}
    >

        <div id="logo" style={{ marginBottom: `40px`, }}>
        <Link to="/">
        <div style={{ maxWidth: `80px`, height: `auto`}}>
          <Logo />
        </div>
        </Link>
        </div>

        <div id="listOfPosts" style={{}}>
          <h3>Recent Posts</h3>
          <Link to="/page-2/">The full scope</Link>
        </div>

      </div>

    <footer style={{ marginLeft: `40px`, marginTop: `420px`, }}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>

  </aside>
)

export default Sidebar