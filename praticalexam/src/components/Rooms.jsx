import React from 'react';

const Rooms = () => {
  const rooms = [
    { id: 1, type: 'Relax', price: 3000 },
    { id: 2, type: 'Suite', price: 5000 },
    { id: 3, type: 'Standard', price: 2000 }
  ];

  return (
    <div className="container">
      <h2>Available Rooms</h2>
      {rooms.map(room => (
        <div key={room.id} className="card">
          <h3>{room.type} Room</h3>
          <p>Price: ₹{room.price} / night</p>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
