// App.jsx
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavScrollExample from './Components/Navbar'
import Home from './Pages/Home'
import Edit from './Pages/EditPage'
import AddProduct from './Pages/AddProduct'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
