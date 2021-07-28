import React, { useState }from 'react'
import { Score } from './score/Score'

export const Home = () => {

  const noteArray = ['b3','c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5', 'd5', 'e5', 'f5', 'g5', 'a5', 'b5', 'c6']

  const [seq, setSeq] = useState({
    num1: 0,
    num2: 0,
    num3: 0
  })

  const [notes, setNotes] = useState([
    ['c4'],
    ['d4'],
    ['e4'],
    ['f4']
  ])

  const [notes2, setNotes2] = useState([
    ['g4'],
    ['a4'],
    ['b4'],
    ['c5']
  ])

  const handleControlledInputChange = (event) => {
    const newSeq = {...seq}
    newSeq[event.target.id] = parseInt(event.target.value)
    setSeq(newSeq)
    console.log(newSeq)
  }
  
  const generateNotes = (event) => { 
    console.log(seq)
    let newNotes = [
      [noteArray[seq.num1], noteArray[seq.num2], noteArray[seq.num3]],
      [noteArray[seq.num1+1], noteArray[seq.num2+1], noteArray[seq.num3+1]],
      [noteArray[seq.num1+2], noteArray[seq.num2+2], noteArray[seq.num3+2]],
      [noteArray[seq.num1+3], noteArray[seq.num2+3], noteArray[seq.num3+3]]
    ]

    let newNotes2 = [
      [noteArray[seq.num1+4], noteArray[seq.num2+4], noteArray[seq.num3+4]],
      [noteArray[seq.num1+5], noteArray[seq.num2+5], noteArray[seq.num3+5]],
      [noteArray[seq.num1+6], noteArray[seq.num2+6], noteArray[seq.num3+6]],
      [noteArray[seq.num1+7], noteArray[seq.num2+7], noteArray[seq.num3+7]]
    ]

    setNotes(newNotes)
    setNotes2(newNotes2)
    }



  return (
    <>
      <section>
        <h1 className="title">Create a Seqence</h1>
        <div className="scores_divs">
        <Score
          staves={notes}
        />
        <Score
          staves={notes2}
        />
        </div>
        <form className="numbers">
          <label for="number1">select scale degrees: </label>
          <input type="number" id="num1" className="number" min="1" max="8" onChange={handleControlledInputChange}></input>
          <input type="number" id="num2" className="number" min="1" max="8" onChange={handleControlledInputChange}></input>
          <input type="number" id="num3" className="number" min="1" max="8" onChange={handleControlledInputChange}></input>
        </form>
        <div className="buttons">
          <button className="btn">Randomize Numbers</button>
          <button className="btn" onClick={generateNotes}>Generate Notes</button>
          <button className="btn">Save Sequence</button>
        </div>
      </section>
    </>
  );
}
