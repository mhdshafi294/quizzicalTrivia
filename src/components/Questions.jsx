import React from 'react'
import './Questions.css'
import Question from './Question'
import {nanoid} from "nanoid"
// import Confetti from "react-confetti"


function Questions(props) {
  const [allQuestions, setAllQuestions] = React.useState([])
  const [allOnQuestions, setAllOnQuestions] = React.useState([])
  const [allQuestionsChecked, setAllQuestionsChecked] = React.useState(false)
  const [correctAnswers, setCorrectAnswers] = React.useState(0)
  const [playAgain, setPlayAgain] = React.useState(0)

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
        .then(res => res.json())
        .then(data => setAllQuestions(data.results))
  }, [playAgain])

  React.useEffect(() => {
    setAllOnQuestions(newQuestions())
  }, [allQuestions])

  let questions = allOnQuestions.map(quest => {
    return(
      <Question
        key={quest.id}
        id={quest.id}
        question={quest.question}
        choices={quest.choices}
        correct={quest.correct}
        holdAnswer={holdAnswer}
      />
    )
  })

  function newQuestions(){
    let onQuestions = allQuestions.map(quest => {
      let correctAnswer = {
        value: quest.correct_answer,
        isHeld: false,
        correct: true,
        id: nanoid(),
      }
      let inCorrectAnswers = quest.incorrect_answers.map(answer => {
        return{
          value: answer,
          isHeld: false,
          correct: false,
          id: nanoid(),
        }
      })
      let choices = shuffle([correctAnswer, ...inCorrectAnswers])
      return{
        id: nanoid(),
        question: quest.question,
        choices: choices,
        correct: quest.correct_answer,
        checked:false
      }
    })
    return onQuestions
  }

  function holdAnswer(idQestion, idAnswer) {
    setAllOnQuestions(prevs => prevs.map(question => {
      if(question.id === idQestion){
        let newAnswers = question.choices.map(answer => {
          if(answer.id === idAnswer){
            return {...answer, isHeld: !answer.isHeld}
          }else{
            return {...answer, isHeld: false}
          }
        })
        return {...question, choices: newAnswers}
      }else{
        return question
      }
    }))
  }

  function checkAnswers(){
    setCorrectAnswers(0)
    setAllOnQuestions(prev => prev.map(question => {
      console.log(question)
      for(let i = 0; i< 4; i++){
        if(question.choices[i].isHeld && question.choices[i].correct){
          console.log("correct answer")
          setCorrectAnswers(prev => prev + 1)
          break
        }
      }
      return {...question, checked: true}
    }))
    setAllQuestionsChecked(true)
  }

  function handlePlayAgain(){
    console.log(allOnQuestions)
    setCorrectAnswers(0)
    setAllQuestionsChecked(false)
    setPlayAgain(prev => prev + 1)
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  return (
    <div className="questions">
      {/* {correctAnswers === 5 && <Confetti />} */}
      {questions}
      <div className="finish">
        {allQuestionsChecked && <p>You scored {correctAnswers}/5 correct answers</p>}
        {allQuestionsChecked? <button onClick={handlePlayAgain}>Play Again</button> : <button onClick={checkAnswers}>Check answers</button>}
      </div>
    </div>
  )
}

export default Questions