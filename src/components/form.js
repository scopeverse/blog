import PropTypes from "prop-types"
import React from "react"

const Form = ({ }) => (

<div>

<form method="POST" netlify-honeypot="bot-field" data-netlify="true" style= {{
  marginLeft: `50px`,
  marginTop: `30px`,
  width: `600px`,
  }}  >
  <input type="hidden" name="form-name" value="username" />
  <label>
    <input type="text" name="name" placeholder="http://hotscope.io/leia" style={{
      border: `none`,
      borderBottom: `1px solid #252525`,
      background: `transparent`,
      marginRight: `20px`,
      width: `360px`,
      outline: `none`,
    }} />
  </label>
  <input type="submit" value="Subscribe" style={{
    width: `120px`,
    height: `50px`,
    backgroundColor:`#252525`,
    borderRadius: `8px`,
    color: `white`,
  }} />
</form>

</div>
)

export default Form
