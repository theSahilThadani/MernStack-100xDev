import React from 'react'
import axios from 'axios'


function Todos({todos}) {
    console.log(todos)
    const handleClick = (id) => {
            const data ={
                id:id
            }
        axios.post('http://localhost:3000/completed',data)
        window.location.reload()
        .then(response => {
            // Handle success
            console.log('Response:', response.data);
          })
          .catch(error => {
            // Handle error
            console.error('Error:', error);
          });
    }

    const handleDelete = (id) => {
      const data ={
        id:id
      }
      axios.post('http://localhost:3000/delete',data)
      window.location.reload()
      .then(response => {
        // Handle success
        console.log('Response:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
      });
    }

  return (
    <div style={{ textAlign: 'center' }}>
    <h1>Todos</h1>
    <div style={{ position: 'absolute', top: '40%',left:'41.4%' }}>
      {todos.map((todo, index) => (
        <div key={index} style={{ marginBottom: '20px', backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '10px', width: '300px' }}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <button onClick={() => handleClick(todo._id)} style={{ padding: '8px 12px', borderRadius: '5px', backgroundColor: todo.completed ? '#ccc' : '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
            {todo.completed ? "Completed" : "Mark As Done"}
          </button>
          <button onClick={() => handleDelete(todo._id)} style={{ margin:10,padding: '8px 12px', borderRadius: '5px', backgroundColor:'#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Delete Me!
          </button>
        </div>
      ))}
    </div>
  </div>
  
    
  )
}

export default Todos