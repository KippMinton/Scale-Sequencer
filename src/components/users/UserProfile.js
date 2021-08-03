import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserProvider"
import "./User.css"
import { SequenceContext } from "../sequences/SequenceProvider"
import { SequenceCard } from "../sequences/SequenceCard"
import { InstrumentContext } from "../instruments/InstrumentProvider"

export const UserProfile = () => {

  const [user, setUser] = useState({})
  const { getUserById, isLoggedIn } = useContext(UserContext)
  const userId = parseInt(isLoggedIn)
  
  const { getUserSequences, sequences } = useContext(SequenceContext)

  const { getInstruments, instruments } = useContext(InstrumentContext)


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

  useEffect(() => {
    getInstruments()
  },[])

  return (
    <>
      <section className="user">

        <h3 className="user__name">{user.username}</h3>

      </section>
      <section className="user__sequences">
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
