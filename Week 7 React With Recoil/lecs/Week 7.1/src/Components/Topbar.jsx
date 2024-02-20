import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
const Topbar = () => {
  const navigate=useNavigate()

  return (
    <div>
      <button onClick={()=>{navigate('/dashboard')}}>Dashboard</button>
      <button onClick={()=>{navigate('/LandingPage')}}>LandingPage</button>
      <button onClick={()=>{navigate('/')}}>Home</button>
    </div>
  )
}

export default Topbar
