import React, { useState, useContext, useEffect }from 'react'
import { Score } from './score/Score'
import { UserContext } from "./users/UserProvider"
import { SequenceContext } from "./sequences/SequenceProvider"

export const Home = (props) => {
  const { isLoggedIn, getUserById } = useContext(UserContext)
  const  [userObj, setUserObj] = useState({})
  const userId = parseInt(isLoggedIn)

  useEffect(() => {
    if(isLoggedIn){
    getUserById(userId)
    .then(setUserObj)}
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
    } else if (n1 === n2 || n2 === n3){
      window.alert("Neighboring numbers must be different.")
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
      <section className="lesson">
        <h3>How to Use Scale Sequence Generator</h3>
        <div className="lesson__body">
          <p>
            Scale Sequence Generator is a music education tool that assists musicians of any skill level in developing their scale knowledge by generating written notation and providing a cataloging system to track progress. If you are unfamiliar with the concept of sequences, read the following article to learn how they can be utilized in your musical progress.
          </p>
          <p>
            A musical sequence occurs when three or more consecutive notes are repeated at a different pitch level within the same voice.  If the sequence remains in the same key it is considered a tonal sequence.  For the practicing musician, this can be a very valuable device for advancing one’s sight-reading, improvisational, aural and technical skills. By continuously practicing sequences of varied lengths and complexity you will train your eyes, ears and fingers to become fluidly familiar with a scale in ways that practicing linear ascending and descending scales can not, although doing so is fundamental.
          </p>
          <p>
            Regardless of the scale type (major, minor, chromatic, whole-tone, pentatonic, etc.) a sequence can be described numerically, wherein the numbers represent the scale’s degrees.  Containing no sharps or flats, this concept is easily applied to the C major scale.  As with all major scales, C major consists of 7 unique notes with stepwise intervals in between: C, D, E, F, G, A, B.  The C that falls above the B completes the octave, and the pattern repeats. A common 3 note sequence is 1, 2, 3 and should be one of the first on the practice list for any developing musician.  To apply the sequence, one plays the first 3 notes of the scale in succession, C, D, E.  Then 1, 2, 3 becomes 2, 3, 4 by ascending to D, E, F.  3, 4, 5 is E, F, G and the three note sequence continues ascending.  Beginners should start by working their way up to the octave.  Playing straight through may be challenging at first, so take time to become familiar with the pattern at every degree.  It may be necessary to play 1, 2, 3 repeatedly at a slow tempo before moving on to repetitions of 2, 3, 4.  Once you are able to play each level comfortably, work on connecting them in a fluid phrase, playing each level once. To descend do not reverse the order of the numerical sequence. Maintain the sequence pattern while descending the initial note until returning to the root.  As you progress, learning new sequences of greater complexity will become easier, as will learning or composing new music.  Once familiar with a few 3 note sequences, practice 4 or more notes.  Sequences can be as long as you want and can even contain “nested” sequences.  Be creative in your approach and keep it fun.  After mastering playing sequences in a linear fashion (1,2,3; 2,3,4) try skipping around levels (1,2,3; 3,4,5; 2,3,4; 4,5,6; etc.).
          </p>
          <p>
            To use the sequence generator, simply select the numbers that build the sequence you wish to practice.  Click generate notes to see the notes rendered to the staff.  Register a profile to save your sequences and see other users’ sequences, as well.  To get started, try these common 3 note sequences:
          </p>
          <ul>
            <li>1, 2, 3</li>
            <li>3, 2, 1</li>
            <li>1, 3, 2</li>
            <li>1, 3, 5</li>
            <li>5, 3, 1</li>
            <li>1, 5, 3</li>
          </ul>
        </div>
      </section>
    </>
  );
}
