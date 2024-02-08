import './App.css'
import axios from 'axios'
import {useEffect,useState} from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo';

function App() {
  const [todos,setTodos] = useState([]);
    useEffect(()=>{
        const TodosFetch = async() => {
            try {
                const response = await axios.get('http://localhost:3000/todos');
                console.log(response.data)
                setTodos(response.data.todos);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };
        TodosFetch()
    })
    
  return (
    <>
      <AddTodo/>
      <Todos todos = {todos}/>
    </>
  )
}

export default App
