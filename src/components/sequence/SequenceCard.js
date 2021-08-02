import React, { useContext }from "react"
import { SequenceContext } from "../sequence/SequenceProvider"
import { UserContext } from "../users/UserProvider"
import "./Sequence.css"

export const SequenceCard = ({ sequence }) =>{ 

  const { isLoggedIn } = useContext(UserContext)
  const { deleteSequence, getUserSequences } = useContext(SequenceContext)

  const userId = parseInt(isLoggedIn)

  const handleDeleteSequence = (event) => {
    event.preventDefault()
    console.log("sequence id is " + sequence.id)
    console.log(userId)
    deleteSequence(sequence.id)
    .then(getUserSequences(userId))
  }
  
  return (
    <section className="sequence">
      <h3 className="sequence__header">
          {sequence.number1}, {sequence.number2}, {sequence.number3}
      </h3>
      <div className="sequence__date">{sequence.saveDate}</div>
      <div className="sequence__instrument">Instrument: {sequence.instrumentId}</div>
      <div className="sequence__tempo">Max Tempo: {sequence.tempo}bpm</div>
      <div className="buttons">
        <button >Edit</button>
        <button onClick={handleDeleteSequence}>Delete</button>
      </div>
    </section>
)
}