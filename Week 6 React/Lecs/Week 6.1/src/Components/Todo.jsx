import React, { useEffect, useState } from 'react'

function Todo() {
    const[todo,setTodo]=useState([{
        title:"One",
        description:"onde description"
    },{
        title:"One",
        description:"onde description"
    },{
        title:"One",
        description:"onde description"
    }])


const addTodo=()=>{
    setTodo([...todo,{
        title:Math.random(),
        description:Math.random()
    }])
}
  return (
    <div>
        <button onClick={addTodo}>addtodo</button>
      {todo.map((todo)=>{
        return <div key={todo.title+String(Math.random())}>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
        </div>
      })}
    </div>
  )
}

export default React.memo(Todo)
