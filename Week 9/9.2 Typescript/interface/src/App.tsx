import { useRecoilState } from 'recoil'
import './App.css'
import { TodoAtom } from './atom/TodoAtom'
import { useState } from 'react'

function App() {
  const [todos,setTodos] = useRecoilState(TodoAtom)
  const [newtodo,setNewTodo]:{title:string,description:string} = useState()

  return (
    <>
      {todos.map((todo)=>(
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.des}</p>
        </div>
      ))}

      <input type="text" placeholder='Enter Title' onChange={(e)=>(setNewTodo(e.target.value))} />
      <input type="text" placeholder='Enter description'  onChange={(e)=>(setNewTodo(e.target.value))} />
    </>
  )
}

export default App
