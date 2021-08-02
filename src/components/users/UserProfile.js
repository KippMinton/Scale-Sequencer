import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserProvider"
import "./User.css"
import { SequenceContext } from "../sequence/SequenceProvider"
import { SequenceCard } from "../sequence/SequenceCard"

export const UserProfile = () => {

  const [user, setUser] = useState({})
  const { getUserById, isLoggedIn } = useContext(UserContext)
  
  const { getUserSequences, sequences } = useContext(SequenceContext)

  const userId = parseInt(isLoggedIn)

  useEffect(() => {
    console.log("useEffect", userId)
    getUserById(userId)
    .then((response) => {
      setUser(response)
    })
    .then(console.log("user set to" + user.username))  
  },[])

  useEffect(() => {
    getUserSequences(userId)
    .then(console.log("sequences set to " + sequences))
  },[])

  return (
    <>
      <section className="user">

        <h3 className="user__name">{user.username}</h3>

      </section>
      <section className="user__Sequences">
        <h3>Sequences</h3>
        <div className="user__sequences">
          {
            sequences.map(sequence => {
              return <SequenceCard key={sequence.id} sequence={sequence} />
            })
          }
        </div>
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


// useEffect(() => {
//   getSequences()
//     .then(console.log("sequences set to " + sequences))
// }, [])