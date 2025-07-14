
import React from "react";
import Myfooter from "../components/Myfooter";

const ContactPage = () => {
  return (
    <>
    <h1 className="text-center h1">CONTACT US</h1>
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">Get in Touch</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Myfooter/>
    </>
  );
};

export default ContactPage;
