import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function useOnline() {
    const [online,setOnline] = useState(window.navigator.onLine)
    useEffect(()=>{
        const handleOnline = () => setOnline(true);
        const handleOffline = () => setOnline(false);
        window.addEventListener('online',handleOnline)
        window.addEventListener('offline',handleOffline)

        return ()=>{
            window.removeEventListener('online',handleOnline)
            window.removeEventListener('offline',handleOffline)
        }
    },[])
  return {online}
}

export default useOnline