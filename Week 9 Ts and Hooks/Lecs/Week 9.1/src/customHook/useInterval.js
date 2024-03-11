import { useEffect } from "react"

function useInterval(fn,timeout) {
    useEffect(()=>{
        const timeinterval=setInterval(() => {
            fn()
        }, timeout);
        return()=>{
            clearInterval(timeinterval)
        }
    },[])
}

export default useInterval
