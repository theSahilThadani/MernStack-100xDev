import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <ClassCounter />
      <FunctionCounter />
    </>
  )
}

// crating Class for counter increaser using classbase components

class ClassCounter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count:0
    }}

    render(){
      return(
        <div>
          <p>{this.state.count}</p>
          <button onClick={()=>(this.setState({count:this.state.count+1}))}>Increase</button>
        </div>
      )
    }
  
}

function FunctionCounter (){
  const [count,setCount]= useState(0)

  return(
    <div>
      <p>{count}</p>
      <button onClick={()=>(setCount((p)=>(p+1)))}>Increase</button>
    </div>
  )
}

export default App
