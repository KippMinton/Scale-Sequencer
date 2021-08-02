import React, { useContext }from "react"
import { useHistory } from "react-router-dom"
import { SequenceContext } from "./SequenceProvider"
import { UserContext } from "../users/UserProvider"
import { InstrumentContext } from "../instruments/InstrumentProvider"
import "./Sequence.css"

export const SequenceCard = ({ sequence }) =>{ 

  const { isLoggedIn } = useContext(UserContext)
  const { deleteSequence, getUserSequences } = useContext(SequenceContext)
  const { instruments, getInstruments } = useContext(InstrumentContext)

  const history = useHistory()

  const userId = parseInt(isLoggedIn)

  const handleDeleteSequence = (event) => {
    event.preventDefault()
    console.log("deleting user " + userId + "'s sequence id " + sequence.id)
    console.log(userId)
    deleteSequence(sequence.id)
    .then(getUserSequences(userId))
  }
  
  return (
    <section className="sequence">
      <h3 className="sequence__header">
          {sequence.num1}, {sequence.num2}, {sequence.num3}
      </h3>
      <div className="sequence__date">{sequence.saveDate}</div>
      <div className="sequence__instrument">Instrument: {sequence.instrumentId}</div>
      <div className="sequence__tempo">Max Tempo: {sequence.tempo}bpm</div>
      <div className="practice__notes">Practice Notes: {sequence.practiceNotes}</div>
      <div className="buttons">
        <button className="sequence-btn" onClick={() => {
          history.push(`/sequences/edit/${sequence.id}`)
        }}>Edit Sequence</button>
        <button className="sequence-btn" onClick={handleDeleteSequence}>Delete</button>
      </div>
    </section>
)
}