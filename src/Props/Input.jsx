import React from 'react'

const Input = (props, type) => {
  return (
    <>
 <div>
    <input type={type} {...props} placeholder={props.placeholder} />

    
 </div>

</>
  )
}

export default Input
