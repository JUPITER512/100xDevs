
import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import CreateTodo from './components/createTodo'
function App() {

  const [todos,setTodos]=useState([])
  fetch("http://localhost:3000/todos").then(async (res)=>{
    const todos = res.json()
    setTodos(todos)
  })
  return (
    <>
      <div>
        <CreateTodo />
        <Todos todos={
          [
            {
              title:"HELLO",
              description:"Hello World",
              completed: true,
            }
          ]
        }></Todos>
      </div>
    </>
  )
}

export default App
