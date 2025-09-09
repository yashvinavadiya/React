import React from "react";

const PromoBanners = () => {
  const banners = [
    {
      img: "https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/banners/banner-1.jpg",
      title: "Smart Watches",
    },
    {
      img: "https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/banners/banner-2.jpg",
      title: "Headphones Sale",
    },
    {
      img: "https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/banners/banner-3.jpg",
      title: "Laptops Collection",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 px-6">
      {banners.map((b, i) => (
        <div key={i} className="relative group overflow-hidden rounded-xl shadow-md">
          <img src={b.img} alt={b.title} className="w-full rounded-xl" />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xl font-bold">
            {b.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromoBanners;
