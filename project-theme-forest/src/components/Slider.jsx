import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="w-full h-[850px] ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
   
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-[850px]">
            <img
              src="https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/slider/slide1.jpg"
              alt="Slide 1"
              className="w-full h-full object-fit "
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center pl-20 text-white">
              <h2 className="text-4xl font-bold mb-4">Big Sale</h2>
              <p className="text-lg mb-6">Up to 50% Off on Electronics</p>
              <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-[850px]">
            <img
              src="https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/slider/slide2.jpg"
              alt="Slide 2"
              className="w-full h-full object-fit"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center pl-20 text-black">
              <h2 className="text-4xl font-bold mb-4">New Arrivals</h2>
              <p className="text-lg mb-6">Trendy Collection for You</p>
              <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
