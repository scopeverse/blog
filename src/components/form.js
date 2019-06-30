import PropTypes from "prop-types"
import React from "react"

const Form = ({ }) => (

<div>

<form name="username" method="POST" netlify-honeypot="bot-field" data-netlify="true" autocomplete="off" target="_blank"
onsubmit="window.open('http://google.com/','_blank',);"
style= {{
  marginLeft: `50px`,
  marginTop: `30px`,
  width: `600px`,
  }}  >
  <input type="hidden" name="form-name" value="username" />
  <label>
  <span class="fixedText" id="usernamePrefix" style={{borderBottom: `1px solid #252525`, paddingBottom: `3px`,}}>hotscope.io/</span>
    <input type="text" name="name" placeholder="leia" style={{
      border: `none`,
      borderBottom: `1px solid #252525`,
      background: `transparent`,
      marginRight: `20px`,
      width: `280px`,
      outline: `none`,
    }} />
  </label>
  <input class="btn" type="submit" value="Subscribe" style={{
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
