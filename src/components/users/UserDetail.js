import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "./UserProvider"
import "./User.css"
import { SequenceContext } from "../sequences/SequenceProvider"
import "../sequences/Sequence.css"
import { InstrumentContext } from "../instruments/InstrumentProvider"


export const UserDetail = () => {
  
  const { getUserById } = useContext(UserContext)
  const [user, setUser] = useState({})
  const { userId } = useParams();

  const { getUserSequences, sequences } = useContext(SequenceContext)

  const { instruments } = useContext(InstrumentContext)

  

  useEffect(() => {
    console.log("useEffect", userId)
    getUserById(userId)
      .then((response) => {
        setUser(response)
      })
  }, [])

  useEffect(() => {
    getUserSequences(userId)
      .then(console.log("sequences set to " + sequences))
  }, [])

  // useEffect(() => {
  //   getInstruments()
  // })

  return (
    <>
      <section className="user">

        <h3 className="user__name">{user.username}</h3>
        <div className="name">{user.name}</div>
        <div className="user__email">Email: {user.email}</div>

      </section>
      <section className="user__sequences">
        <h3>Sequences</h3>
        <div className="user__sequences">
          {
            sequences.map(sequence => {
              const iId = sequence.instrumentId
              return (
                <>
                  <section className="sequence" key={sequence.id}>
                    <h3 className="sequence__header">
                    {sequence.num1}, {sequence.num2}, {sequence.num3}
                    </h3>
                    <div className="sequence__date">{sequence.saveDate}</div>
                    <div className="sequence__instrument">Instrument: {instruments[iId].name}</div>
                    <div className="sequence__tempo">Max Tempo: {sequence.tempo}bpm</div>
                    <div className="practice__notes">Practice Notes: {sequence.practiceNotes}</div>
                  </section>
                </>
              )
            })
          }
        </div>
      </section>
    </>
  )
}
