import React from 'react'
import './Questions.css'
import Question from './Question'


function Questions(props) {

  return (
    <div className="questions">
      <Question/>
      <div className="hr"></div>
      <Question/>
      <div className="hr"></div>
      <Question/>
      <div className="hr"></div>
      <Question/>
      <div className="hr"></div>
    </div>
  )
}

export default Questions