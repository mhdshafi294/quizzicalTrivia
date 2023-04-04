import React from 'react'
import Choice from './Choice'
import './Question.css'


function Question(props) {
  const [started, setStarted] = React.useState(false)

  function generateNewAnswer() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}

function allNewAnswer() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie())
    }
    return newDice
}


  return (
    <div className="question">
      <p>How would one say goodbye in Spanish?</p>
      <div className="choices">
        <Choice/>
        <Choice/>
        <Choice/>
        <Choice/>
      </div>
    </div>
  )
}

export default Question