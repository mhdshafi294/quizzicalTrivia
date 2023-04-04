import React from 'react'
import Choice from './Choice'
import './Question.css'


function Question(props) {

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