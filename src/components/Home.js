import React, { useState, useContext, useEffect }from 'react'
import { Score } from './score/Score'
import { UserContext } from "./users/UserProvider"
import { SequenceContext } from "./sequences/SequenceProvider"

export const Home = (props) => {
  const { isLoggedIn, getUserById } = useContext(UserContext)
  const  [userObj, setUserObj] = useState({})
  const userId = parseInt(isLoggedIn)

  useEffect(() => {
    getUserById(userId)
    .then(setUserObj)
  },[])

  const { addSequence } = useContext(SequenceContext)

  
  
  const noteArray = ['b3','c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5', 'd5', 'e5', 'f5', 'g5', 'a5', 'b5', 'c6']
  
  const [seq, setSeq] = useState({
    num1: 0,
    num2: 0,
    num3: 0
  })
  
  let n1 = seq.num1
  let n2 = seq.num2
  let n3 = seq.num3

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
    if (n1 === 0 || n2 === 0 || n3 === 0) {
      window.alert("Please, select all numbers.")
    } else if(n1 !== 1 && n2 !== 1 && n3 !== 1){
      window.alert("At least one number must be 1.")
    } else {
      let newNotes = [
        [noteArray[n1], noteArray[n2], noteArray[n3] ],
        [noteArray[n1+1], noteArray[n2+1], noteArray[n3+1]],
        [noteArray[n1+2], noteArray[n2+2], noteArray[n3+2]],
        [noteArray[n1+3], noteArray[n2+3], noteArray[n3+3]]
      ]

      let newNotes2 = [
        [noteArray[n1+4], noteArray[n2+4], noteArray[n3+4]],
        [noteArray[n1+5], noteArray[n2+5], noteArray[n3+5]],
        [noteArray[n1+6], noteArray[n2+6], noteArray[n3+6]],
        [noteArray[n1+7], noteArray[n2+7], noteArray[n3+7]]
      ]

      setNotes(newNotes)
      setNotes2(newNotes2)
      }
    }

  const saveNewSequence = () => {
    const instId = userObj.instrumentId
    const newSeqObj = {
      num1: n1,
      num2: n2,
      num3: n3,
      userId: userId,
      saveDate: new Date(Date.now()).toLocaleString().split(',')[0],
      tempo: 40,
      instrumentId: instId,
      practiceNotes: "Practice, practice, practice...",
      isFavorite: false
    }
    addSequence(newSeqObj)
    .then(window.alert("Sequence added to your profile!"))
    .then(console.log("New sequence added " + newSeqObj))
  }

  const handleClickSaveSequence = (event) => {
    event.preventDefault()
    if (n1 === 0 || n2 === 0 || n3 === 0) {
      window.alert("Please, select all numbers.")
    } else if (n1 !== 1 && n2 !== 1 && n3 !== 1) {
      window.alert("At least one number must be 1.")
    } else {
      saveNewSequence()
    }
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
          <label htmlFor="number1">select scale degrees: </label>
          <input type="number" id="num1" className="number" min="1" max="8" onChange={handleControlledInputChange}></input>
          <input type="number" id="num2" className="number" min="1" max="8" onChange={handleControlledInputChange}></input>
          <input type="number" id="num3" className="number" min="1" max="8" onChange={handleControlledInputChange}></input>
        </form>
        <div className="buttons">
          <button className="btn" onClick={generateNotes}>Generate Notes</button>
          {isLoggedIn ? 
            <>
              <button className="btn" onClick={handleClickSaveSequence}>Save Sequence</button>
            </> :
            <>
              <div></div>
            </>
          }
        </div>
      </section>
    </>
  );
}
