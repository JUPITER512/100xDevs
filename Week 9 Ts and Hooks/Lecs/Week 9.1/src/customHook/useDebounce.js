import { useEffect, useState } from "react"

function useDebounce(input,time) {
    const [value,setValue]=useState('')
    useEffect(()=>{
        const timeout=setTimeout(() => {
            setValue(input)
        }, time);
        return()=>{
            clearInterval(timeout);
        }
    },[input]);
    return value
}

export default useDebounce
