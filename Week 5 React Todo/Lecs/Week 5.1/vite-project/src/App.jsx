import { useState } from 'react'
import Button from './component/Button'
import { set } from 'zod'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button count={count} setCount={setCount}/>
    </>
  )
}

export default App
