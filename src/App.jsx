import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Start from './components/Start'
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
        <h2>questions</h2>
      }
    </div>
  )
}

export default App
