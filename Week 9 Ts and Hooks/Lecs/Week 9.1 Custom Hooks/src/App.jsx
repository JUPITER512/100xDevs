
import React, { useState } from 'react'
import useIsOnline from './customHook/useIsOnline'
import useInterval from './customHook/useInterval'
import Input from './Input'

function App() {
  return (
    <div>
    <Input/>
      
    </div>
  )
}

export default App

// function App() {
//   const online=useIsOnline()
//   const[count,setCount]=useState(0  )
//   useInterval(()=>{
//     setCount(prev=>prev+1)
//   },1000)
//   if(!online){
//     return(<>
//     <div>
//       User is Offline
//     </div>
//     </>)
//   }else{

//     return (
//       <div>
//               <div>"Count is "</div>{count}

//       user is online
//     </div>
//   )
// }
// }

// export default App

// import useTodo from './customHook/useTodo'
// function App() {
//   const {todos,loading}= useTodo({url:"https://sum-server.100xdevs.com/todos"})
//   if(loading){
//     return<>
//     <div>
//       Loading.....
//     </div>
//     </>
//   }else if(todos){

//     return (
//       <>
      
//       {todos.map((todo,index) => {
//         return(
    
//           <div key={index}>
//             <Track todo={todo} />
//           </div>
      
//         )
//       })}
//     </>
//   )
// }
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App


// import React, { useState, useEffect } from 'react';

// function App() {
//   const [component, setComponent] = useState(<Component />);
//   useEffect(() => {
//     setTimeout(() => {
//       setComponent(<Second/>);
//     }, 10000);
//   }, []);
//   return (
//     <>
//       <div>
//         {component}
//       </div>
//     </>
//   );
// }
// function Second(){
//   return<>
//     <div>
//       Second
//     </div>
//   </>
// }
// function Component() {
//   useEffect(() => {
//     console.log("App started");
//     return () => {
//       console.log("App unmount");
//       // Cleanup code (similar to componentWillUnmount)
//     };
//   }, []);
//   return<><div>Hello</div></>
// }

// export default App;
