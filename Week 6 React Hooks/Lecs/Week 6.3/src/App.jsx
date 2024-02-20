import React, { useEffect, useMemo, useState } from 'react'

const App = () => {
  const [data1,setData1]=useState({})
  const [data2,setData2]=useState({})
  const [bankData,setBankData]=useState({})

  useEffect(()=>{
    setData1({returns:1000})
  },[])
  useEffect(()=>{
    setData2({returns:1000})
  },[])
  useEffect(()=>{
    setTimeout(() => {
      setBankData({income:2000})
    }, 3000);
  },[])

  const cryptoReturns=useMemo(()=>{
    console.log("Before")
    return data1.returns+data2.returns
  },[data1,data2])
  const incomeaTax=(cryptoReturns + bankData.income)*0.3
  console.log("After")
  return (
    <div>
        Hello {incomeaTax}
    </div>
  )
}

export default App
