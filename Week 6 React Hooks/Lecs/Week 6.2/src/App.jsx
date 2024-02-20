import React, { memo, useCallback, useState } from 'react'

const App = () => {
  const [count,setCount] =useState(0)
  var inputfunction=useCallback(()=>{
    console.log('input function')
  },[])
  return (
    <div>
      <Child inputFunc={inputfunction}/>
      <button onClick={()=>{setCount(prev=>prev+1)}}> Count {count}</button>
    </div>
  )
}
// const Child=()=>{
//   console.log("Child render")
//   return <>
  
//   </>
// }
const Child=memo(({inputFunc})=>{
  return <> 
    <button onClick={inputFunc}>Click Me</button>
  </>
})

export default App

// import React, { useState,useMemo } from 'react'

// const App = () => {
//   let [counter,setCounter] =useState(0)
//   let [inputValue,setInputValue]=useState(1)
//   function handleCounter(){
//     setCounter(prevValue=>prevValue+1)
//   }
//   let count=useMemo(()=>{
//     let count=0;
//     for(let i=0;i<=inputValue;i++){
//       count+=i
//     }
//     return count
//   },[inputValue])
//   return (
//     <div>
//         <input type="text"  value={inputValue} onChange={(e)=>{
//           setInputValue(e.target.value)
//         }}/>
//         <p>Sum is {count}</p>
//         <button onClick={handleCounter}>Counter {counter}</button>
//     </div>
//   )
// }

// export default App




// import React,{useState,useEffect} from 'react'

// const App = () => {
//   const [buttonId,setButtonId]=useState(1)
// 	// const [todos,setTodos] = useState([])
// 	// useEffect(() =>{
// 	// const func=async()=>{
// 	// const response=await fetch('https://sum-server.100xdevs.com/todos')
// 	// const data=await response.json()
// 	// console.log(data)
// 	// setTodos(data.todos)
// 	// }
// 	// func()
// 	// },[])
// 	return (
// 		<div>
//       <button onClick={()=>{
//         setButtonId(1)
//       }}>1</button>
//       <button onClick={()=>{
//         setButtonId(2)
//       }}>2</button>
//       <button onClick={()=>{
//         setButtonId(3)
//       }}>3</button>
//       <button onClick={()=>{
//         setButtonId(4)
//       }}>4</button>
// { <TodoWithId id={buttonId}/>}
// 	// </div>
// 	// <div>
// 	// {
// 	// todos.map((todo)=>{
// 	// return(
// 	// <Todo key={todo.id} title={todo.title} description={todo.description}/>
// 	// )
// 	// })
// 	// }
// 	// </div>
// 	)
// }
// function TodoWithId({ id }) {
// 	const [todos, setTodos] = useState({});

// 	const fetchData = async () => {
// 		try {
// 			const response = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`);
// 			const data = await response.json();
// 			setTodos(data.todo);
// 		} catch (error) {
// 			console.error('Error fetching todo:', error);
// 		}
// 	};

// 	useEffect(() => {
// 		fetchData();
// 	}, [id]);

// 	function handleOnClick() {
// 		setCount(prevCount => prevCount + 1);
// 	}

// 	return (
// 		<>
//         <>
//           <h1>{todos.title}</h1>
//           <p>{todos.description}</p>
//         </>
// 		</>
// 	);
// }

// // function Todo({title,description}){
// // return(<>
// // <h1>{title}</h1>
// // <p>{description}</p>
// // </>)
// // }

// export default App
