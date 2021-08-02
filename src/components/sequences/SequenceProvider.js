import React, { createContext, useState } from "react";


export const SequenceContext = createContext();

export const SequenceProvider = (props) => {

  const [sequences, setSequences] = useState([])

  const getSequences = () => {
    return fetch("http://localhost:8088/sequences")
      .then(res => res.json())
      .then(setSequences)
  };

  const getSequenceById = (id) => {
    return fetch(`http://localhost:8088/sequences/${id}`)
      .then(res => res.json())
  }

  const addSequence = sequenceObj => {
    return fetch("http://localhost:8088/sequences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sequenceObj)
    })
  }

  const editSequence = sequence => {
    return fetch(`http://localhost:8088/sequences/${sequence.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sequence)
    })
      .then(getSequences)
  }

  const getUserSequences = (userId) => {
    return fetch(`http://localhost:8088/user/${userId}/sequences`)
    .then(res => res.json())
    .then(setSequences)
  }

  const deleteSequence = (sequenceId) => {
    return fetch(`http://localhost:8088/sequences/${sequenceId}`, {
      method: "DELETE"
    })
      // .then(getUserSequences)
  }

  return (
    <SequenceContext.Provider value={{
      sequences, getSequences, getSequenceById, addSequence, editSequence, getUserSequences, deleteSequence
    }}>
      {props.children}
    </SequenceContext.Provider>
  )
}