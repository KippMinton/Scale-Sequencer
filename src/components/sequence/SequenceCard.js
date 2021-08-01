import React from "react"
import "./Sequence.css"

export const SequenceCard = ({ sequence }) =>{ 
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
        <button >Delete</button>
      </div>
    </section>
)
}