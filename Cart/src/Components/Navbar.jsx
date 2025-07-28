import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li className='flex justify-center gap-40 bg-orange-100 h-16  p-4'>
            <img src="https://themewagon.github.io/ashion/img/logo.png" alt="" />
            <Link to="/" >Home</Link>
            <Link to="/product" >Product</Link>
            <Link to="/cart" >Cart</Link>
            <Link to="/wishlist" >Wishlist</Link>
            <Link to="/login" >Login</Link>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar