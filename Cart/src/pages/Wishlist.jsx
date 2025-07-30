import React from "react";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-5">Wishlist</h1>
      <div className="flex flex-wrap justify-center gap-12 mt-5">
        {wishlistItems.length === 0 ? (
          <p className="text-lg">No items in wishlist.</p>
        ) : (
          wishlistItems.map((item, index) => (
            <div key={index} className="max-w-80 border-2 border-black p-4 rounded-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-[300px] h-[300px] object-contain"
              />
              <p className="line-clamp-1">{item.title}</p>
              <p className="line-clamp-2">{item.description}</p>
              <p className="btn p-2 rounded-none text-lg bg-white text-black underline">
                Rs.{item.price}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
