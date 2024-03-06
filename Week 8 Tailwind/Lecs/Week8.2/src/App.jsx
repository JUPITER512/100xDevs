import React from 'react'
import RevenueCard from './components/RevenueCard'

const App = () => {
	return (
<>
<div className=' grid grid-cols-4'> 
    <RevenueCard title={"Amount Pending"} orderCount={20} amount={'10,21.33'}/ >

</div>
</>
	)
}

export default App
