import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Rooms from './components/Rooms';
import BookingForm from './components/Bookingform';
import Bookings from './components/Bookings';
import Admin from './components/Admin';

function App() {
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('bookings');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/book" element={<BookingForm addBooking={addBooking} />} />
        <Route path="/bookings" element={<Bookings bookings={bookings} setBookings={setBookings} />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
