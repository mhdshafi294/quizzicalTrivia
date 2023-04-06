import React from 'react'
import './Questions.css'
import Question from './Question'


function Questions(props) {
  const [allQuestions, setAllQuestions] = React.useState([])
  const [allQuestionsChecked, setAllQuestionsChecked] = React.useState(true)

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
        .then(res => res.json())
        .then(data => setAllQuestions(data.results))
  }, [])

  console.log(allQuestions)

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

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