import React from 'react';
import Myfooter from '../components/Myfooter';


const Home = () => {
  return (
    <>
    <section className="bg-teal-100 mt-5">
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
           Discover the Essence <br /> of Timeless Elegance
          </h1>
          <p className="text-lg text-gray-600 mb-6">
           Our  fashion collection is made with high-quality materail and designed. <br /> Shop now to find the perfact pieaces for you.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-xl  transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-black border border-gray-400 text-white rounded-xl  transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/66a25b02229bd8685eca9476/978bb036-f52e-405c-905c-607ff676c5e6/Old+Money+Aesthetic+Outfits+-+Casual+Like+Diana.png"
            alt="Hero"
            className="w-full max-w-md rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>

    <Myfooter/>
    </>


  );
};

export default Home;
