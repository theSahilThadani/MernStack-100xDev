import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {RecoilRoot, useRecoilValue} from 'recoil'
import {NotificationsAtom} from './store/Atoms/asyncAtom'
import './App.css'

function App() {
  const Notifications = useRecoilValue(NotificationsAtom)
  return (
    
    <div>
      <button>Network: {Notifications.network}</button>
      <button>Jobs: {Notifications.jobs}</button>
      <button>Messaging: {Notifications.messaging}</button>
      <button>Notifications: {Notifications.notifications}</button>
    </div>
  )
}

export default App
