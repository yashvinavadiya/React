import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Condition from './condition'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>This is condition rendering</h1>
   <Condition/>
    </>
  )
}

export default App
