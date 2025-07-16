import React from 'react';
import Myfooter from '../components/Myfooter';

const users = [
  {
    name: 'Variya Purv',
    role: 'Full Stack Developer',
    email: 'purv@example.com',
    location: 'Surat, India',
    skills: 'React, Node.js, MongoDB',
    img: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Khushi Patel',
    role: 'UI/UX Designer',
    email: 'khushi@example.com',
    location: 'Ahmedabad, India',
    skills: 'Figma, Adobe XD, Tailwind CSS',
    img: 'https://i.pravatar.cc/150?img=65',
  },
  {
    name: 'Jay Joshi',
    role: 'Backend Developer',
    email: 'jay@example.com',
    location: 'Rajkot, India',
    skills: 'Node.js, Express, MongoDB',
    img: 'https://i.pravatar.cc/150?img=12',
  },
];

const Profile = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 mt-5">Our Team Members</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 text-center hover:scale-105 transition-transform"
          >
            <img
              src={user.img}
              alt={user.name}
              className="w-28 h-28 mx-auto rounded-full border-4 border-pink-400"
            />
            <h2 className="text-xl font-bold mt-4 text-gray-800">{user.name}</h2>
            <p className="text-gray-500 mb-2">{user.role}</p>
            <div className="text-left text-sm mt-4">
              <p><span className="font-semibold text-gray-700">Email:</span> {user.email}</p>
              <p><span className="font-semibold text-gray-700">Location:</span> {user.location}</p>
              <p><span className="font-semibold text-gray-700">Skills:</span> {user.skills}</p>
            </div>
            <button className="mt-5 bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition-all">
              View Profile
            </button>
          </div>
        ))}
      </div>
       <div className='mt-30'>

        <Myfooter/>
     
      </div>
    </div>
   
    
      </>
   
  );
};

export default Profile;
