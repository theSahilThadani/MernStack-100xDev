import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilState, useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable } from 'recoil'
import { todoAtomFamily } from './store/SelectorFamily'
import { RecoilRoot } from 'recoil'
function App() {
  

  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
    </RecoilRoot>
  )
}
function Todo ({id}) {
  const [todo,settodo] = useRecoilValueLoadable(todoAtomFamily(id)) // useRecoilValueLoadable gives us the ability to handle the loading state of the selector and give state like loading,hasError,hasValue etc
  if(todo.state === 'loading'){
    return <p>Loading...</p>
  }else if(todo.state === 'hasValue'){
    return (
      <>
        <h1>{todo.contents.title}</h1>
        <p>{todo.contents.title}</p>
      </>
    )
  }

}

export default App
