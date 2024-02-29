import React from 'react'
import countAtom from './store/atoms/count'
import { RecoilRoot, useRecoilState ,useRecoilValue, useSetRecoilState} from 'recoil'
import { evenSelector } from './store/selectors/selectors'

const App = () => {
  return (
    <div>
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
    </div>
  )
}

function Count(){
  return <div>
    <CountRenderer/>
    <Buttons/>
    <EvenRenderer/>

  </div>
}

function CountRenderer(){
  const count=useRecoilValue(countAtom);
  return(
    <>
      <b>
        {count}
        
      </b>
    </>
  )
}

function Buttons(){
  // const [count,setCount]=useRecoilState(countAtom);
  const setCount=useSetRecoilState(countAtom)
  return <div>
    <button onClick={()=>{
      setCount(count=>count+1);
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>

    {
      
    }
  </div>
}
function EvenRenderer(){
  const even=useRecoilValue(evenSelector)
  return(
    <>
      <b>
        {even?'It is even':''}
        
      </b>
    </>
  )
}
export default App
