import React from 'react'
import './Questions.css'
import Question from './Question'


function Questions(props) {
  const [allQuestions, setAllQuestions] = React.useState([])
  // const [allOnQuestions, setAllOnQuestions] = React.useState([])
  const [allQuestionsChecked, setAllQuestionsChecked] = React.useState(false)

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
        .then(res => res.json())
        .then(data => setAllQuestions(data.results))
  }, [])

  let questions = allQuestions.map(quest => {
    let answerChoices = shuffle([quest.correct_answer, ...quest.incorrect_answers])
    return(
      <Question
        question={quest.question}
        choices={answerChoices}
        correct={quest.correct_answer}
      />
    )
  })

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  // function newQuestions(){
  //   let onQuestions = allQuestions.map(quest => {
  //     let correctAnswer = {
  //       value: quest.correct_answer,
  //       isHeld: false,
  //       correct: true,
  //       id: nanoid(),
  //     }
  //     let inCorrectAnswers = quest.incorrect_answers.map(answer => {
  //       return{
  //         value: answer,
  //         isHeld: false,
  //         correct: false,
  //         id: nanoid(),
  //       }
  //     })
  //     let choices = shuffle([correctAnswer, ...inCorrectAnswers])
  //     return{
  //       question: quest.question,
  //       choices: choices,
  //       correct: quest.correct_answer,
  //     }
  //   })
  //   return onQuestions
  // }


  return (
    <div className="questions">
      {questions}
      <div className="finish">
        {allQuestionsChecked && <p>You scored {3}/5 correct answers</p>}
        {allQuestionsChecked? <button>Play Again</button> : <button>Check answers</button>}
      </div>
    </div>
  )
}

export default Questions