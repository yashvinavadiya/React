import { useState } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Component from './components/navbar';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/contact';



const routepath = createBrowserRouter([
    {
    path: "/",
    element: <Component />,
    children: [
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element: <Contact/>
  },
 
],
    }

])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={routepath} />
    
    </>
  )
}

export default App
