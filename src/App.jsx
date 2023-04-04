import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Start from './components/Start'
import Question from './components/Question'
import './App.css'

function App() {
  const [started, setStarted] = useState(false)

  function startQuiz(){
    setStarted(true)
  }

  return (
    <div className="App">
      {
        !started ?
        <Start startQuiz={startQuiz}/> :
        <Question/>
      }
    </div>
  )
}

export default App
