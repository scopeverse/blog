import PropTypes from "prop-types"
import React from "react"

import Form from "./form"

const Subscribe = ({ }) => (

<div
  style={{
    maxWidth: `800px`,
    height: `335px`,
    backgroundColor:`#FFF4F8`,
    backgroundImage: `url("https://svgshare.com/i/DoP.svg")`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `-10% 100%`,
    padding: `70px 150px`,
    margin: `20px 0 20px 0`,
  }}
  >
  <h2 style={{
    color: `#252525`,
    fontFamily: `PT Serif`,
    fontSize: `36px`,
    marginLeft: `50px`,
    marginRight: `-160px`,
  }} > Become one with the force</h2>
  <div
    style={{
      fontFamily: `Montserrat`,
      fontWeight: `300`,
      marginLeft: `50px`,
      marginRight: `-160px`,
    }}
    >
    Sign up for Hotscope ahead of time and claim your unique username when the product goes live.
    </div>
    <Form />
  </div>
)

export default Subscribe
