import React from "react"
import { Link } from "gatsby"

import Subscribe from "../components/subscribe"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>The full scope</h1>
    <p>People who talk a lot often don't do as much. I'm no exception. Talking is dangerous and promotes a false sense of productivity and accomplishment I know too well. The top performers I know are people who let their work speak for themselves but as always, life is not binary and I have my good share of reasons for doing things the way I do.</p>
    <p>For the last couple of weeks I've been proudly coding and designing Hotscope, a platform where you can rate and find better books, podcasts and online courses so you can spend less time searching and more time learning. It's been a challenging and thrilling experience because Hotscope is a side project I work on after hours and because I never coded anything from scratch on my own (databases, api integration, ...). — it will take me some time to launch a product ANY people can use.</p>
    <p>If you're interested in my learnings around web development and product management (how I make decisions regarding what to build and why), I'm documenting my process on Twitter and sharing the few little things I know. I also use polls to let you join the conversation.</p>
    <Subscribe />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
