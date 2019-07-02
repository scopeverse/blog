import React from "react"
import { Link } from "gatsby"

import Subscribe from "../components/subscribe"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Hostcope Blog" />
    <h1>Why Hotscope</h1>
    <p>With the ever-growing number of online courses comes a lot of noise. When I'm learning something new, I often spend too much time sorting through different tabs on Udemy, Udacity and a couple of other hundred providers.</p>
    <p>Wondered if there could be a better way so I started building Hotscope, a place to rate and find better books, podcasts and online courses so you can spend less time searching and more time learning.</p>

    <p>Proud to be coding it myself and it will still take me some weeks to get it online but you can already start following my product development + decision making process here. Another place where you can find up to date news is on <a href="https://twitter.com/hotscopeIO">Twitter</a>.</p>

    <Subscribe />
  </Layout>
)

export default IndexPage
