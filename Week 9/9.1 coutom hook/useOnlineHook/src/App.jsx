import './App.css'
import useOnline from './Hook/useOnline'

function App() {
  const {online} = useOnline()
  console.log(online)
  return (
    <>
      {online? <h1>You are Online</h1>:<h1>You are offline</h1>}
    </>
  )
}

export default App
