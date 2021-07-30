import React, { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { UserContext } from "../users/UserProvider"
import "./NavBar.css"


export const NavBar = (props) => {
  
  const { setLoggedInState, isLoggedIn } = useContext(UserContext)

  const history = useHistory()
  
  const Logout = () => {
    window.sessionStorage.clear()
    setLoggedInState(false)
    history.push("/")
  }

  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">Sequencer</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/profile">Profile</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/users">Users</Link>
      </li>
      
      {!isLoggedIn ?
      <li className="navbar__item">
        <Link className="navbar__link" to="/login">sign in</Link>
      </li> :
      <li className="navbar__item">
        <Link className="navbar__link" onClick={Logout} to="/">sign out</Link>
      </li>}
    </ul>
  )
}

//