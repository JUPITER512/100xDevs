// import React from 'react'
// import Todo from './Components/Todo'
// import './App.css'
// const App = () => {
// 	return (
// 		<> 
//     <CardWrap>
//       <TextComponent/>
//       </CardWrap> 
//     <CardWrap>
//       <Todo/>
//       </CardWrap> 
// 		</>
// 	)
// }
// function TextComponent(){
// 	return <>

// 		<h1>Text Component</h1>
// 		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti autem quae eos voluptatem est suscipit dolores perferendis doloribus iste, quas necessitatibus ut ratione rem voluptatibus officiis at quo. Quam?</p>
// 	</>
// }
// function CardWrap({children})
// {
//   console.log(children)
// 	return <>
//   <div className='cardWrapper'>
//     {children}
//   </div>

// 	</>
// }
// export default App
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [todo,setTodo]=useState([])
  const backendUrl="https://sum-server.100xdevs.com/todos"
  useEffect(()=>{
    const fetchtodos=async()=>{
      try{
        const response= await fetch(backendUrl)
        if(!response.ok){
          throw new Error('Failed to fetch')
        }
        const responsjson=await response.json()
        console.log(responsjson['todos']  )
        setTodo(responsjson['todos'])

      }
      catch(err){
        console.log("Erro while fetching todo",err.message)
      }
    }
    fetchtodos()
  },[])
  return (
    <div>
      {todo.map((t,i)=>{
        {console.log(t)}
        return(
          <div key={t.id}>
              <h1>{t.title}</h1>
              <p>{t.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
