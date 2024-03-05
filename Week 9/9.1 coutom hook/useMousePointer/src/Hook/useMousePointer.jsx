import React, { useEffect, useState } from 'react'

function useMousePointer(e) {
    const [pointer,setPointer] = useState({x:0,y:0})
    const hadnlePointer = (e) => {
        setPointer({x:e.clientX,y:e.clientY})
    }
    useEffect(()=>{
        window.addEventListener('mousemove',hadnlePointer)
        return  () => {
            window.removeEventListener('mousemove',hadnlePointer)
        }
    },[])
  return {pointer}
}

export default useMousePointer