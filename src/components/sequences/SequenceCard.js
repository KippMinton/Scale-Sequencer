import React, { useContext }from "react"
import { useHistory } from "react-router-dom"
import { SequenceContext } from "./SequenceProvider"
import "./Sequence.css"
import { UserContext } from "../users/UserProvider"

export const SequenceCard = ({ sequence, instruments }) =>{ 

  const { isLoggedIn } = useContext(UserContext)
  const { deleteSequence, getUserSequences } = useContext(SequenceContext)

  console.log(instruments)
  const history = useHistory()

  const userId = parseInt(isLoggedIn)

  const iId = sequence.instrumentId

  const handleDeleteSequence = (event) => {
    event.preventDefault()
    console.log("deleting user " + userId + "'s sequence id " + sequence.id)
    deleteSequence(sequence.id)
    .then(getUserSequences(userId))
  }
  
  return (
    <>
      <section className="sequence">
        <div className="sequence__header">
          <h3>
              {sequence.num1}, {sequence.num2}, {sequence.num3}
          </h3>
        </div>
        <div className="sequence__date">{sequence.saveDate}</div>
        <div className="sequence__instrument">Instrument: {instruments[iId]?.name}</div>
        <div className="sequence__tempo">Max Tempo: {sequence.tempo}bpm</div>
        <div className="practice__notes">Practice Notes: {sequence.practiceNotes}</div>

        <div className="buttons">
            <button className="btn" onClick={() => {
              history.push(`/sequences/edit/${sequence.id}`)
            }}>Edit</button>
            <button className="btn" onClick={handleDeleteSequence}>Delete</button>
        </div>
      </section>
    </>
  )
}