import React, { useEffect, useState } from 'react'

function useDebounce(value,delay) {
  const [newvalue,setValue] = useState(value)
  useEffect(()=>{
   const interval= setInterval(()=>{
        setValue(value)
    },delay)
    return()=>{
        clearInterval(interval)
    }
  },[value,delay])
    return newvalue
}

export default useDebounce