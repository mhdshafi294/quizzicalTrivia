import React from 'react'
import {nanoid} from "nanoid"
import Choice from './Choice'
import './Question.css'


function Question(props) {
  const [answers, setAnswers] = React.useState(allNewAnswer());

  function generateNewAnswer() {
    return {
        value: "Adiós",
        isHeld: false,
        id: nanoid()
    }
}

function allNewAnswer() {
    const newAnswers = []
    for (let i = 0; i < 4; i++) {
      newAnswers.push(generateNewAnswer())
    }
    return newAnswers
}

function holdAnswer(id) {
  setAnswers(oldAnswers => oldAnswers.map(answer => {
      return answer.id === id ? 
          {...answer, isHeld: !answer.isHeld} :
          answer
  }))
}

const answerChoices = answers.map(answer => (
  <Choice 
      key={answer.id} 
      value={answer.value} 
      isHeld={answer.isHeld} 
      holdDice={() => holdAnswer(answer.id)}
  />
))

  return (
    <div className="question">
      <p>How would one say goodbye in Spanish?</p>
      <div className="choices">
        {answerChoices}
      </div>
    </div>
  )
}

export default Question