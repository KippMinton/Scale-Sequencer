import React from 'react'
import { Score } from './components/score/Score'

export const ScaleSequencer = () => {
  return (
    <>
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
    </>
  );
}
