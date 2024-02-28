import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useRecoilValue} from 'recoil'
import {AtomFamily} from './store/AtomFamily'
import './App.css'

function App() {
  

  return (
    <>
      <Todo id={1}/>
      <Todo id={2}/>
    </>
  )
}
function Todo ({id}) {
  const todo = useRecoilValue(AtomFamily(id))
  return (
    <>
      <h1>{todo.Title}</h1>
      <p>{todo.Description}</p>
    </>
  )
}

export default App