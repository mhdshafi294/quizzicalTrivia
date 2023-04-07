import React from 'react'
import './Choice.css'


function Choice(props) {

  let checkedBackGround ="";
  let borderColor="";

  if(props.checked){
    if(props.correct){
      checkedBackGround = "#94D7A2";
      borderColor="none";
    }else if (props.isHeld){
      checkedBackGround = "#F8BCBC";
      borderColor="none";
    }else {
      checkedBackGround = "white";
      borderColor="0.794239px solid #4D5B9E";
    }
  }else if(props.isHeld){
    checkedBackGround = "#D6DBF5";
    borderColor="none";
  }else{
    checkedBackGround = "white";
    borderColor="0.794239px solid #4D5B9E";
  }

  const styles = {
    backgroundColor: checkedBackGround,
    border: borderColor,
}

  return (
    <div 
      className="choice"
      style={styles}
      onClick={props.holdDice}
    >
        <div dangerouslySetInnerHTML={{ __html: props.value }} />
    </div>
  )
}

export default Choice