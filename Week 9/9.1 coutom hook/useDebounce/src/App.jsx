import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useDebounce from './Hook/useDebounce'

function App() {
  const [input, setInput] = useState()
  const debounceValue = useDebounce(input,200)
  return (
    <>
      <input type="text" value={input} placeholder='Enter Text for using debounceing' onChange={(e)=>setInput(e.target.value)} />
      <p>DebounedValue: {debounceValue}</p>
    </>
  )
}

export default App
