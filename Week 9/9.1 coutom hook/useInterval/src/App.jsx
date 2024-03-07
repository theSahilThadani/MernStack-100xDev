import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useInterval from './Hook/useInterval'

function App() {
  const [count, setCount] = useState(0)
  useInterval(()=>{
    setCount((p)=>(p+1))
  },1000)
  return (
    <>
      <h1>Stop Watch: {count}</h1>
    </>
  )
}

export default App
