import React from 'react'
import {nanoid} from "nanoid"
import Choice from './Choice'
import './Question.css'


function Question(props) {
  const [answers, setAnswers] = React.useState(newChoices());

  function newChoices() {
      const newChoices = []
      for (let i = 0; i < 4; i++) {
        newChoices.push({
          value: props.choices[i],
          isHeld: false,
          id: nanoid()
      })
      }
      return newChoices
  }

  function holdAnswer(id) {
    setAnswers(oldAnswers => oldAnswers.map(answer => {
        return answer.id === id ? 
            {...answer, isHeld: !answer.isHeld} :
            {...answer, isHeld: false}
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
      <p>{props.question}</p>
      <div className="choices">
        {answerChoices}
      </div>
      <div className="hr"></div>
    </div>
  )
}

export default Question