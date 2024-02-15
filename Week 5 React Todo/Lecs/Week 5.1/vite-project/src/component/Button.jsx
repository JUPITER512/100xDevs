import React from 'react'

const Button = (props) => {
    const handleButton=()=>{
        props.setCount(props.count+1)
    }
  return (
    <div>
      <button onClick={handleButton}>Counter {props.count}</button>
    </div>
  )
}

export default Button
