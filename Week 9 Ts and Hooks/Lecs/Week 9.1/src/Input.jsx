import React, { useState } from 'react'
import useDebounce from './customHook/useDebounce'
function Input() {
    const [value,setValue]=useState('')
    const debounceValue=useDebounce(value,500)
    console.log(debounceValue)
  return (
    <div>
      <input type="text" value={value} onChange={(e)=>{
        setValue(e.target.value);
      }} placeholder='search'/>
    </div>
  )
}

export default Input
