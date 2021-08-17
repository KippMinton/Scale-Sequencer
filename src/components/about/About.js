import React from "react"
import "./About.css"


export const About = () => {
  return (
    <>
      <div className="title__div">
        <h1>How to Use Scale Sequence Generator</h1>
      </div>
      <section className="lesson">
        <div className="lesson__body">
          <p>
            Scale Sequence Generator is a music education tool that assists musicians of any skill level in developing their scale knowledge by generating written notation and providing a cataloging system to track progress. If you are unfamiliar with the concept of sequences, read the following article to learn how they can be utilized in your musical progress.
          </p>
          <br></br>
          <p>
            A musical sequence occurs when three or more consecutive notes are repeated at a different pitch level within the same voice.  If the sequence remains in the same key it is considered a tonal sequence.  For the practicing musician, this can be a very valuable device for advancing one’s sight-reading, improvisational, aural and technical skills. By continuously practicing sequences of varied lengths and complexity you will train your eyes, ears and fingers to become fluidly familiar with a scale in ways that practicing linear ascending and descending scales can not, although doing so is fundamental.
          </p>
          <br></br>
          <p>
            Regardless of the scale type (major, minor, chromatic, whole-tone, pentatonic, etc.) a sequence can be described numerically, wherein the numbers represent the scale’s degrees.  Containing no sharps or flats, this concept is easily applied to the C major scale.  As with all major scales, C major consists of 7 unique notes with stepwise intervals in between: C, D, E, F, G, A, B.  The C that falls above the B completes the octave, and the pattern repeats. A common 3 note sequence is 1, 2, 3 and should be one of the first on the practice list for any developing musician.  To apply the sequence, one plays the first 3 notes of the scale in succession, C, D, E.  Then 1, 2, 3 becomes 2, 3, 4 by ascending to D, E, F.  3, 4, 5 is E, F, G and the three note sequence continues ascending.  Beginners should start by working their way up to the octave.  Playing straight through may be challenging at first, so take time to become familiar with the pattern at every degree.  It may be necessary to play 1, 2, 3 repeatedly at a slow tempo before moving on to repetitions of 2, 3, 4.  Once you are able to play each level comfortably, work on connecting them in a fluid phrase, playing each level once. To descend do not reverse the order of the numerical sequence. Maintain the sequence pattern while descending the initial note until returning to the root.  As you progress, learning new sequences of greater complexity will become easier, as will learning or composing new music.  Once familiar with a few 3 note sequences, practice 4 or more notes.  Sequences can be as long as you want and can even contain “nested” sequences.  Be creative in your approach and keep it fun.  After mastering playing sequences in a linear fashion (1,2,3; 2,3,4) try skipping around levels (1,2,3; 3,4,5; 2,3,4; 4,5,6; etc.).
          </p>
          <br></br>
          <p>
            To use the sequence generator, simply select the numbers that build the sequence you wish to practice.  Click generate notes to see the notes rendered to the staff.  Register a profile to save your sequences and see other users’ sequences, as well.  To get started, try these common 3 note sequences:
          </p>
          <br></br>
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
  )
}