import React, { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'vitHotelRooms';

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({ id: null, name: '', type: '', price: '' });
  const [editing, setEditing] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedRooms = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedRooms) setRooms(savedRooms);
  }, []);

  // Save rooms to localStorage on rooms change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rooms));
  }, [rooms]);

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update room
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.type || !form.price) {
      alert('Please fill all fields');
      return;
    }

    if (editing) {
      // Update existing room
      setRooms(
        rooms.map((room) =>
          room.id === form.id ? { ...form, price: Number(form.price) } : room
        )
      );
      setEditing(false);
    } else {
      // Add new room
      setRooms([
        ...rooms,
        { ...form, id: Date.now(), price: Number(form.price) },
      ]);
    }

    setForm({ id: null, name: '', type: '', price: '' });
  };

  // Edit room
  const handleEdit = (room) => {
    setForm({ id: room.id, name: room.name, type: room.type, price: room.price });
    setEditing(true);
  };

  // Delete room
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this room?')) {
      setRooms(rooms.filter((room) => room.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white p-6 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-center">VIT Hotel Room Management</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-blue-800 p-6 rounded-lg shadow-lg mb-10"
      >
        <h2 className="text-2xl font-semibold mb-4">
          {editing ? 'Edit Room' : 'Add New Room'}
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">
            Room Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-blue-700 text-white border border-blue-600 focus:outline-yellow-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block mb-1 font-medium">
            Room Type
          </label>
          <select
            name="type"
            id="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-2 rounded bg-blue-700 text-white border border-blue-600 focus:outline-yellow-400"
          >
            <option value="">Select type</option>
            <option value="Professional">Professional</option>
            <option value="Relax">Relax</option>
            <option value="Simple">Simple</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="price" className="block mb-1 font-medium">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={form.price}
            onChange={handleChange}
            className="w-full p-2 rounded bg-blue-700 text-white border border-blue-600 focus:outline-yellow-400"
            placeholder="Ex: 150"
            min="0"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-blue-900 font-bold py-3 rounded hover:bg-yellow-300 transition"
        >
          {editing ? 'Update Room' : 'Add Room'}
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="w-full table-auto border-collapse border border-blue-600">
          <thead>
            <tr className="bg-blue-800 text-yellow-400">
              <th className="border border-blue-600 px-4 py-2">Room Name</th>
              <th className="border border-blue-600 px-4 py-2">Type</th>
              <th className="border border-blue-600 px-4 py-2">Price ($)</th>
              <th className="border border-blue-600 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-300">
                  No rooms added yet.
                </td>
              </tr>
            ) : (
              rooms.map((room) => (
                <tr
                  key={room.id}
                  className="odd:bg-blue-700 even:bg-blue-800 hover:bg-yellow-400 hover:text-blue-900 transition"
                >
                  <td className="border border-blue-600 px-4 py-2">{room.name}</td>
                  <td className="border border-blue-600 px-4 py-2">{room.type}</td>
                  <td className="border border-blue-600 px-4 py-2">{room.price}</td>
                  <td className="border border-blue-600 px-4 py-2 space-x-3">
                    <button
                      onClick={() => handleEdit(room)}
                      className="bg-yellow-400 px-3 py-1 rounded font-semibold hover:bg-yellow-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(room.id)}
                      className="bg-red-600 px-3 py-1 rounded font-semibold hover:bg-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
