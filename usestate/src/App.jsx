import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usestate from './hooks/usestate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Usestate/>
    </>
  )
}

export default App
