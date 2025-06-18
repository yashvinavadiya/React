import { useState } from 'react'
import './App.css'
import Accordions from './components/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import Herosection from './telwindcss/heosection'
import "tailwindcss";
import Demo from './chakraui/chakraui';
import { Provider } from './components/ui/provider';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Accordions/>
    <Herosection/>
    <Provider>
    <Demo/>
    </Provider>

    </>
  )
}

export default App