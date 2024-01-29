import React from 'react'


//todos=Arr
const Todos = ({todos}) => {
    
  return (
    <div>
        {
            todos.map((todo)=>{
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed==true?"Completed":"Mark As Complete"}</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Todos
