import React, { useEffect, useState } from 'react'

function useIsOnline() {
    const [ononline,setOnline]=useState();
    useEffect(()=>{
        setInterval(() => {
            setOnline(window.navigator.onLine)
        }, 5000);
        setOnline(window.navigator.onLine)

    })
    return ononline
}

export default useIsOnline
