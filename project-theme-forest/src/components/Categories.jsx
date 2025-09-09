import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Categories = () => {
  const categories = [
    { name: "Mobiles", img: "https://via.placeholder.com/200x200" },
    { name: "Laptops", img: "https://via.placeholder.com/200x200" },
    { name: "Watches", img: "https://via.placeholder.com/200x200" },
    { name: "Cameras", img: "https://via.placeholder.com/200x200" },
  ];

  return (
    <div className="my-10 px-6">
      <h2 className="text-3xl font-bold mb-6">Shop by Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <Card key={i} className="shadow-lg rounded-xl hover:scale-105 transition">
            <img src={cat.img} alt={cat.name} className="h-40 w-full object-cover rounded-t-xl" />
            <CardContent>
              <Typography align="center" variant="h6">{cat.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categories;
