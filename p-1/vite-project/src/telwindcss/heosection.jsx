import React from 'react';

function HeroSection() {
  return (
    <section className="bg-gray-100 py-20 mt-4  ">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This is a sample hero section using React and Tailwind CSS.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default HeroSection;