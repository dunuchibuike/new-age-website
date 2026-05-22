import React from 'react'
import "../CSS/Button.css"
const Buttons = (props) => {
  return (
    <div>
      <button className={`btn ${props.className}`} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  )
}

export default Buttons
