import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserProvider"
import "./User.css"

export const UserProfile = () => {

  const [user, setUser] = useState({})
  const { getUserById, isLoggedIn } = useContext(UserContext)
  const userId = parseInt(isLoggedIn)

  useEffect(() => {
    console.log("useEffect", userId)
    getUserById(userId)
      .then((response) => {
        setUser(response)
      })
  },[])

  return (
    <>
      <section className="user">

        <h3 className="user__name">{user.username}</h3>
        <div className="name">{user.name}</div>
        <div className="user__email">Email: {user.email}</div>

      </section>
    </>
  )
}



// const getFriends = () => {
//   return fetch(`http://localhost:8088/currentUsers/${id}/friends?_expand=user`)
//     .then((res) => res.json())
//     .then(setFriends);
// };

// http://localhost:8088/TMDB/${TMDBId}/movies?_expand=friend