import React from "react"

import { Link } from "gatsby"
import logo from "../../images/logo.svg"

const NavBar = () => {
  return (
    <div>
      <Link to={"/"}>
        This is a Link in the NavBar content
        <img src={logo} />
      </Link>
    </div>
  )
}
export default NavBar
