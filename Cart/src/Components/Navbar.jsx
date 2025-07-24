import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li className='flex justify-evenly bg-blue-200 h-16  align-middle'>
            <Link to="/" className='mt-3.5'>Home</Link>
            <Link to="/product" className='mt-3.5'>Product</Link>
            <Link to="/cart" className='mt-3.5'>Cart</Link>
            <Link to="/wishlist" className='mt-3.5'>Wishlist</Link>
            <Link to="/login" className='mt-3.5'>Login</Link>
            <Link to="/profile" className='mt-3.5'>Profile</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar