import React, { useState } from 'react';

const BookingForm = ({ addBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    roomType: '',
    date: ''
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      ...formData,
      id: Date.now()
    };
    addBooking(newBooking);
    setFormData({ name: '', roomType: '', date: '' });
  };

  return (
    <div className="container">
      <h2>Book a Room</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          required
        >
          <option value="">Select Room Type</option>
          <option value="Standard">Standard</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Suite">Suite</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
