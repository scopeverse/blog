import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/image"

const Sidebar = ({ }) => (
  <aside
    style={{
      order: `0`,
      display: `flex`,
      padding: `20px`,
      minWidth: `300px`,
      width: `300px`,
      height: `100%`,
      backgroundColor: `white`,
      zIndex: `99`,
    }}
  >
    <div
      style={{
        marginLeft: `20px`,
        maxWidth: 200,
        padding: `1.45rem 1.0875rem`,
        position: `fixed`,
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

    <footer style={{
      marginLeft: `30px`,
      position: `fixed`,
      bottom: `30px`,
    }}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>

  </aside>
)

export default Sidebar
