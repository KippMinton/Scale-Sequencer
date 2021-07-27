import React from 'react'
import { Score } from './score/Score'

export const Home = () => {

  const generateNotes = () => {

  }

  return (
    <>
      <section>
        <h1 className="title">Create a Sequence</h1>
        <div className="scores_divs">
        <Score
          staves={[
            ['c4', 'd4', 'e4'],
            ['d4', 'e4', 'f4'],
            ['e4', 'f4', 'g4'],
            ['f4', 'g4', 'a4']
          ]}
        />
        <Score
          staves={[
            ['g4', 'a4', 'b4'],
            ['a4', 'b4', 'c5'],
            ['b4', 'c5', 'd5'],
            ['c5', 'd5', 'e5']
          ]}
        />
        </div>
        <div className="numbers">
          <label for="number1">select scale degrees: </label>
          <input type="number" id="number1" className="number" min="1" max="8"></input>
          <input type="number" id="number2" className="number" min="1" max="8"></input>
          <input type="number" id="number3" className="number" min="1" max="8"></input>
        </div>
        <div className="buttons">
          <button className="btn">Randomize Numbers</button>
          <button className="btn">Generate Notes</button>
          <button className="btn">Save Sequence</button>
        </div>
      </section>
    </>
  );
}
