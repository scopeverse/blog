import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/image"

const Sidebar = ({ }) => (
  <aside
    style={{
      //background: `#ff8dbd`,
      width: `30%`,
      height: `100%`,
      position: `fixed`,
      float: `left`,
      padding: `20px`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        <div style={{ maxWidth: `80px`, height: `auto`}}>
          <Logo />
        </div>
        </Link>
      </h1>
    </div>
    <h3>Recent Posts</h3>
    <Link to="/page-2/">The full scope</Link>

    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>

  </aside>
)

export default Sidebar
