import React, { useRef, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"
import { InstrumentContext } from "../instruments/InstrumentProvider"
import { UserContext } from "../users/UserProvider"

export const Register = (props) => {
    const firstName = useRef()
    const userName = useRef()
    const email = useRef()
    const instrumentId = useRef()
    const verifyPassword = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const { instruments, getInstruments } = useContext(InstrumentContext)

    const { setIsLoggedIn } = useContext(UserContext)

    useEffect(() => {
      getInstruments()
    }, [])


    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          email: email.current.value,
                          name: `${firstName.current.value}`, 
                          username: `${userName.current.value}`,
                          instrumentId: parseInt(instrumentId.current.value)
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                          if (createdUser.hasOwnProperty("id")) {
                            sessionStorage.setItem("sequence_user", createdUser.id)
                            setIsLoggedIn(sessionStorage.getItem("sequence_user"))
                            history.push("/")
                          }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
        
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Sequence Generator</h1>
                <fieldset>
                    <label htmlFor="firstName"> Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="userName"> User Name </label>
                    <input ref={userName} type="text" name="userName" className="form-control" placeholder="user name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
            <label htmlFor="instrument">Choose an instrument: </label>
            <select
              ref={instrumentId}
              name="instrument"
              id="instrumentId"
              className="form-control"
            >
              <option value='0'>Select an instrument</option>
              {instruments.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.name}
                </option>
              ))}
            </select>
                </fieldset>
                <fieldset>
                    <button className="btn" type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}

