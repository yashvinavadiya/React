import { useState } from 'react'
import './App.css'
import Eventhandler from './events/events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1>Events Handler</h1>
     <Eventhandler/>
    </>
  )
}

export default App
