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
        <div className="user__name">
          <h1>{user.username}'s Sequences</h1>
        </div>
          <div className="user__sequences">
            { 
              sequences.map(sequence => {
                if (instruments){
                  return <SequenceCard key={sequence.id} sequence={sequence} instruments={instruments} />
                }
                return <div></div>
              })
            }
          </div>
    </>
  )
}
