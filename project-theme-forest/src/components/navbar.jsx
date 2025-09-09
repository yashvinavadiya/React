import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Only 2 images
  const images = [
    "https://picsum.photos/id/1015/1920/1080",
    "https://picsum.photos/id/1016/1920/1080",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Autoplay (every 4 sec)
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white shadow-md">
        <ul className="flex items-center gap-8 h-16 px-6">
          <img
            src="https://portotheme.com/html/porto_ecommerce/assets/images/logo-black.png"
            alt="logo"
            className="h-10"
          />
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/aboutus" className="hover:text-yellow-400">About Us</Link>
          <Link to="/blog" className="hover:text-yellow-400">Blog</Link>
          <Link to="/shopingcart" className="hover:text-yellow-400">Shopping Cart</Link>
          <Link to="/wishlist" className="hover:text-yellow-400">Wishlist</Link>
          <Link to="/chekout" className="hover:text-yellow-400">Checkout</Link>
          <Link to="/login" className="hover:text-yellow-400">Login</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          <Link to="/forgetpassword" className="hover:text-yellow-400">Forget Password</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
