import React from "react";
import Slider from "../components/Slider";
import PromoBanners from "../components/PromoBanners";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Slider />
      <PromoBanners />
      <Categories />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
