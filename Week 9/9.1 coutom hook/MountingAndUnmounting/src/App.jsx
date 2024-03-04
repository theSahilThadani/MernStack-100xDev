import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import React from 'react'
import { useMemo } from 'react'

function App() {
  const [mount, unmount] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      unmount(false)
    },10000)
    return ()=>{
      unmount(true)
    }
  },[])

  return (
    <>
      {mount ? <MountingUnmouting/>:<p>Component Unmounted from here after 10sec</p>}
    </>
  )
}
// function MountingUnmouting ( ) {
//  const [Mounted,SetMounted] = useState(true)
//   useEffect(()=>{
//     console.log('mounted ')
//     return () =>{
//       console.log('unmounted')
//     }
//   },[])
//   return (
//     <div>{Mounted ? <p>Hello I am Mounted</p> : null}</div>
//   )
// }


// above is functional mouting after hook is inventes
//below we follow same for class based components 

class MountingUnmouting extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Mounted:true
    }
  }
  componentDidMount(){
    console.log(this.state.Mounted)
    console.log('I am mounted')
  }
  componentWillUnmount(){
    console.log('i am unmounted bye')
    this.setState({Mounted:false})
  }
  
  render(){
    return (
      <div> <p>Hello I am Mounted</p> </div>
    )
  }
}

export default App
