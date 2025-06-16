import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordions from './components/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import Herosection from './telwindcss/heosection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Accordions/>
    <Herosection/>
    </>
  )
}

export default App