import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountState, textState, charState,CountEvenOdd } from './store/CountAtom'
import { RecoilRoot, useRecoilState, useRecoilValue,useSetRecoilState } from 'recoil'

function App() {
  return (
    <>
      <RecoilRoot>
        <CountHandler />
        <CharacterCounter />
      </RecoilRoot>
    </>
  )
}

function CountHandler() {

  return (
    <div>
      <CountRander />
      <CountUpdator />
    </div>
  )
}

function CountRander() {
  const Count = useRecoilValue(CountState)
  const EvenOdd = useRecoilValue(CountEvenOdd)
  return (
    <div>
      <h1>Count: {Count}</h1>
      <h3>{EvenOdd}</h3>
    </div>
  )
}

function CountUpdator() {
  const setCount = useSetRecoilState(CountState)
  return (
    <div>
      <button onClick={()=>(setCount(c => c+1))}>Increase</button>
      <button onClick={()=>(setCount(c => c-1))}>Decrease</button>
    </div>
  )
}

//Reocoil demo from docs

function CharacterCounter (){
  return(
    <>
    <TextInput />
    <CharacterCount />
    </>
  )
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charState);

  return <>Character Count: {count}</>;
}

export default App
