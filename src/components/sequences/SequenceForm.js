//Kipp Minton
//Component for rendering task form; currently only creates and saves new tasks

import React, { useContext, useState, useEffect } from "react"
import { SequenceContext } from "./SequenceProvider"
import "./Sequence.css"
import { UserContext } from "../users/UserProvider"
import { InstrumentContext } from "../instruments/InstrumentProvider"
import { useHistory, useParams } from 'react-router-dom';


export const SequenceForm = () => {

  const { isLoggedIn } = useContext(UserContext)
  const userId = parseInt(isLoggedIn)

  const { editSequence, getSequenceById } = useContext(SequenceContext)
  
  const [seq, setSeq] = useState({})

  let n1 = parseInt(seq.num1)
  let n2 = parseInt(seq.num2)
  let n3 = parseInt(seq.num3)

  const { instruments, getInstruments } = useContext(InstrumentContext)


  const history = useHistory()
  const { sequenceId } = useParams()

  useEffect(() => {
    if (sequenceId) {
      getSequenceById(sequenceId)
      .then(sequence => {
        setSeq(sequence)
      })
    }
  }, [])

  useEffect(() => {
    getInstruments()
  },[])

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    const newSeq = { ...seq }
    newSeq[event.target.id] = event.target.value
    setSeq(newSeq)
    console.log(newSeq)
  }

  const saveEditSequence = () => {
    editSequence({
      id: seq.id,
      num1: n1,
      num2: n2,
      num3: n3,
      userId: userId,
      saveDate: seq.saveDate,
      tempo: parseInt(seq.tempo),
      instrumentId: parseInt(seq.instrumentId),
      practiceNotes: seq.practiceNotes,
      isFavorite: seq.isFavorite
    })
    .then(() => history.push("/profile"))
  }


  const handleSaveSequence = (event) => {
    event.preventDefault() 
    if (n1 !== 1 && n2 !== 1 && n3 !== 1) {
      window.alert("At least one number must be 1.")
    } else if (n1 === n2 || n2 === n3) {
      window.alert("Neighboring numbers must be different.")
    } else {
      saveEditSequence()
    }
  }

  return (
    <>
      <form className="sequenceForm">
        <h2 className="sequence__header">{n1}, {n2}, {n3}</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="num1">select scale degrees: </label>
            <input type="number" id="num1" className="number" min="1" max="8" onChange={handleControlledInputChange}></input>
            <input type="number" id="num2" className="number" min="1" max="8" onChange={handleControlledInputChange}></input>
            <input type="number" id="num3" className="number" min="1" max="8" onChange={handleControlledInputChange}></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="instrument">Choose an instrument: </label>
            <select
              name="instrument"
              id="instrumentId"
              className="form-control"
              onChange={handleControlledInputChange}
            >
              <option value='0'>Select an instrument</option>
              {instruments.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input type="number" id="tempo" className ="number" min="40" max="280" onChange={handleControlledInputChange}></input>
          </div>
          <div className="form-group">
            <label htmlFor="practiceNotes"></label>
            <input type="text" id="practiceNotes" className="form-control" placeholder="Practice Notes..." value={seq.practiceNotes} onChange={handleControlledInputChange} />
          </div>
        </fieldset>
        <button className="btn" onClick={handleSaveSequence}>
          Save Edits
        </button>
      </form>
    </>
  )
}


