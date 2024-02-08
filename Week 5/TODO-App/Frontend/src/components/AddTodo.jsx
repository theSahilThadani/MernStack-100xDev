import React from 'react'
import axios from 'axios'
import {useState} from 'react'


function AddTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(description.length>0 && title.length>0){
          const data={
            title:title,
            description:description
        }
        await axios.post('http://localhost:3000/todo',data)
        // window.location.reload()
        .then(response => {
            // Handle success
            console.log('Response:', response.data);

          })
          .catch(error => {
            // Handle error
            console.error('Error:', error);
          });
        }
        
    }
  return (
    <>
        <div style={{ display: 'flex', flexDirection: 'column',  position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#f0f0f0', padding: '40px', borderRadius: '10px' }}>
            <form onSubmit={handleSubmit}>
            <input  type="text" onChange={handleTitleChange} placeholder="Enter Title here" style={{ margin: 10, padding: 8, backgroundColor: '#ffffff', borderRadius: 5, border: '1px solid #ccc', width: '80%', boxSizing: 'border-box' }} />
            <input type="text" onChange={handleDescriptionChange} placeholder="Enter Description here" style={{ margin: 10, padding: 8, backgroundColor: '#ffffff', borderRadius: 5, border: '1px solid #ccc', width: '80%', boxSizing: 'border-box' }} />
            <br></br>
            <button type="submit" style={{ margin: 10, padding: 8, backgroundColor: '#007bff', borderRadius: 5, border: 'none', color: '#fff', cursor: 'pointer', }} >Add Todo</button>
            </form>
        </div>
          
    </>
  )
}

export default AddTodo