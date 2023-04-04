import React from 'react'
import './Start.css'


function Start(props) {

  return (
    <div className="start">
      <h2>Quizzical</h2>
      <p>Some description if needed</p>
      <button onClick={props.startQuiz}>Start quiz</button>
    </div>
  )
}

export default Start