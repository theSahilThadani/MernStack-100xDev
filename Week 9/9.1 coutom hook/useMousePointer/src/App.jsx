import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useMousePointer from './Hook/useMousePointer'

function App() {
  const {pointer} = useMousePointer()

  return (
    <>
      <p>Your Mouse pointer is x:{pointer.x} y:{pointer.y}</p>
    </>
  )
}

export default App
