import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './CustomHook/useFetch'

function App() {
  const {Data,Loading} = useFetch()
  // console.log(Data)
  if(Loading) return <h1>Loading...</h1>
  return (
    <>
      <div>
        {Data.map((todo)=>(<div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </div>))}
      </div>
    </>
  )
}

export default App
