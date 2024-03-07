import React, { useEffect } from 'react'

function useInterval(callback,delay) {
   
    useEffect(() => {
    const intervalId = setInterval(callback, delay);
      
    return () => clearInterval(intervalId);
    }, [callback, delay]);
    return {}
}

export default useInterval