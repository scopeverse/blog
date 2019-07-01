import PropTypes from "prop-types"
import React from "react"
import styles from "./layout.module.css"
import Form from "./form"

const Subscribe = ({ }) => (

<div className={styles.usernameSignup}>
  <h2 className={styles.usernameSignupHeader}>Become one with the force</h2>
  <div className={styles.usernameSignupText}>
    Sign up for Hotscope ahead of time and claim your unique username when the product goes live.
    </div>
    <Form />
  </div>
)

export default Subscribe
