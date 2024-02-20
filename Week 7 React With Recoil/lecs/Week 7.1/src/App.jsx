import { set } from 'mongoose'
import React, { useContext } from 'react'
import { useState } from 'react'
import { CountContext } from './Components/Context'

const App = () => {
	const [count,setCount] =useState(0)
	return (
		<div>
      <CountContext.Provider value={{count,setCount}}>
			<Count/> 
      </CountContext.Provider>
		</div>
	)
}
function Count(){
	return<>
	<div>
		<CountRender /> 
		<Buttons />
	</div>
	</>

}
function CountRender(){
  const count=useContext(CountContext)
	return <h1>{count}</h1>
}
function Buttons(){
  const setcount=useContext(CountContext)
	return(
		<>
		<button onClick={()=>setcount(prev=>prev+1)}>Increase</button>
		<button onClick={()=>setcount(prev=>prev-1)}>Decrease</button>
		</>
	)
}

export default App















///************************************************** */
//React Router Dom
///************************************************** */


// import React ,{Suspense}from 'react'
// import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom'

// import Home from './Components/Home'
// import Topbar from './Components/Topbar'
// const LandingPage = React.lazy(()=>import('./Components/LandingPage'))
// const Dashboard = React.lazy(()=>import('./Components/Dashboard'));
// const App = () => {
// return (
// <>

// <BrowserRouter>
// <Topbar/>
// <Routes>
// <Route path='/' element={<Home/>}/>
// <Route path='/dashboard' element={<Suspense fallback={"loading... "}><Dashboard/></Suspense>}/>
// <Route path='/LandingPage' element={<Suspense fallback={"loading... "}><LandingPage/></Suspense>}/>
// <Route/>
// </Routes>
// </BrowserRouter>
// </>
// )
// }

// export default App
