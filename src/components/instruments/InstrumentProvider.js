import React, { createContext, useState } from "react";


export const InstrumentContext = createContext();

export const InstrumentProvider = (props) => {

  const [instruments, setInstruments] = useState([])

  const getInstruments = () => {
    return fetch("http://localhost:8088/instruments")
      .then(res => res.json())
      .then(setInstruments)
  };

  const getInstrumentById = (id) => {
    return fetch(`http://localhost:8088/instruments/${id}`)
      .then(res => res.json())
  }

  return (
    <InstrumentContext.Provider value={{
      instruments, getInstruments, getInstrumentById
    }}>
      {props.children}
    </InstrumentContext.Provider>
  )
}