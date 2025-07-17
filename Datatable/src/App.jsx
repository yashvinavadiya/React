// App.jsx
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavScrollExample from './Components/Navbar'
import Home from './Pages/Home'
import Edit from './Pages/EditPage'
import AddProduct from './Pages/AddProduct'

function App() {
  return (
    <>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </>
  )
}

export default App
