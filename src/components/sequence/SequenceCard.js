import React from "react"
import "../users/User.css"

export const SequenceCard = ({ sequence }) => (
  <section className="user">
    <h3 className="user__name">
        {sequence.number1},{sequence.number2},{sequence.number3}
    </h3>
  </section>
)
