import React from "react"
import { Link } from "gatsby"
import * as styles from "./navigation.module.css"
console.log(styles.navigation, { styles })

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)
