import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import { UserContext } from "../users/UserProvider"
import "./NavBar.css"


export const NavBar = (props) => {
  
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
  const history = useHistory()

  const Logout = () => {
    window.sessionStorage.clear()
    setIsLoggedIn(null)
    history.push("/")
  }

  return (
    <nav>
      <ul className="navbar">

        <li className="navbar__item active">
          <Link className="navbar__link" to="/">Sequencer</Link>
        </li>
        
        <li className="navbar__item active">
          <Link className="navbar__link" to="/about">About</Link>
        </li>

        {!isLoggedIn ?
        <>
          <li className="navbar__item"><div></div></li>
          <li className="navbar__item"><div></div></li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/login">Sign In</Link>
          </li> 
        </>: 
        <>
          <li className="navbar__item">
            <Link className="navbar__link" to="/profile">Profile</Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/users">Users</Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" onClick={Logout} to="/">Sign Out</Link>
          </li>
        </>}
      </ul>
    </nav>
  )
}