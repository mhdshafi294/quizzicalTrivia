import React from 'react'
import './Choice.css'


function Choice(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#D6DBF5" : "white",
    border: !props.isHeld ? "0.794239px solid #4D5B9E" : "none",
}

  return (
    <div className="choice">
        Adiós
    </div>
  )
}

export default Choice