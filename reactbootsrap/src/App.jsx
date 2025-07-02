import { useState } from 'react'
// import Accordions from './components/accrodiant'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Accordions/> */}
     <Home/>
    
 
     
    </>
  )
}

export default App
