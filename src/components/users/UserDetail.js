import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserProvider"
import "./User.css"
import { useParams } from "react-router-dom"

export const UserDetail = () => {
  const { getUserById } = useContext(UserContext)
  const [user, setUser] = useState({})
  const { userId } = useParams();

  useEffect(() => {
    console.log("useEffect", userId)
    getUserById(userId)
      .then((response) => {
        setUser(response)
      })
  }, [])

  return (
    <>
      <section className="user">

        <h3 className="user__name">{user.username}</h3>
        <div className="name">{user.name}</div>
        {/* What's up with the question mark???? See below.*/}
        <div className="user__email">Email: {user.email}</div>

      </section>
    </>
  )
}
