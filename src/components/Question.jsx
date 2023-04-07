import React from 'react'
import {nanoid} from "nanoid"
import Choice from './Choice'
import './Question.css'


function Question(props) {

  const answerChoices = props.choices.map(answer => {
    return (
    <Choice 
        key={answer.id} 
        value={answer.value} 
        isHeld={answer.isHeld} 
        holdDice={() => props.holdAnswer(props.id, answer.id)}
    />)
    })

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