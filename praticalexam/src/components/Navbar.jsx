import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2>VIT Hotel</h2>
    <div>
      <Link to="/">Home</Link>
      <Link to="/rooms">Rooms</Link>
      <Link to="/book">Book</Link>
      <Link to="/bookings">My Bookings</Link>
      <Link to="/admin">Admin</Link>
    </div>
  </nav>
);

export default Navbar;
