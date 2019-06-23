import React from "react"
import { Link } from "gatsby"

import Subscribe from "../components/subscribe"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Hostcope Blog" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Subscribe />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
