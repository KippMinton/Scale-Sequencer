import React, { useState, useContext } from "react"
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../users/UserProvider"
import "./Login.css"


export const Login = () => {
  const [loginUser, setLoginUser] = useState({ email: "" })
  const [existDialog, setExistDialog] = useState(false)
  const { setIsLoggedIn } = useContext(UserContext)

  const history = useHistory()

  const handleInputChange = (event) => {
    const newUser = { ...loginUser }
    newUser[event.target.id] = event.target.value
    setLoginUser(newUser)
  }


  const existingUserCheck = () => {
    // If your json-server URL is different, please change it below!
    return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
      .then(res => res.json())
      .then(user => user.length ? user[0] : false)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    existingUserCheck()
      .then(exists => {
        if (exists) {
          sessionStorage.setItem("sequence_user", exists.id)
          setIsLoggedIn(sessionStorage.getItem("sequence_user"))
          history.push("/")
        } else {
          setExistDialog(true)
        }
      })
  }

  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" open={existDialog}>
        <div>User does not exist</div>
        <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
      </dialog>
      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1>Sequence Generator</h1>
          <h2>Please sign in</h2>
          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required autoFocus
              value={loginUser.email}
              onChange={handleInputChange} />
          </fieldset>
          <fieldset>
            <button className="btn"type="submit">
              Sign in
            </button>
          </fieldset>
        </form>
      </section>
      <section className="link--register">
        <Link className="link--reg" to="/register">Register for an account</Link>
      </section>
    </main>
  )
}
