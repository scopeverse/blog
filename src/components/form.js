import PropTypes from "prop-types"
import React from "react"
import styles from "./layout.module.css"

const Form = ({ }) => (

<div className={styles.usernameSignupFormContainer}>

<form className={styles.usernameSignupForm} name="username" autocomplete="off" target="_blank" action="https://malikpiara.typeform.com/to/doGg34">
  <input type="hidden" name="form-name" value="username" />
  <label>
  <span class="fixedText" id="usernamePrefix" style={{borderBottom: `1px solid #252525`, paddingBottom: `3px`,}}>hotscope.io/</span>
    <input className={styles.usernameSignupFormInput} type="text" name="name" placeholder="leia"/>
  </label>
  <input className={styles.btn} type="submit" value="Subscribe"/>
</form>

</div>
)

export default Form
