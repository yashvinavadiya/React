import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const FeaturedProducts = () => {
  const products = [
    { name: "Smartphone", price: "$299", img: "https://via.placeholder.com/300x300" },
    { name: "Laptop", price: "$899", img: "https://via.placeholder.com/300x300" },
    { name: "Headphones", price: "$99", img: "https://via.placeholder.com/300x300" },
    { name: "Smartwatch", price: "$199", img: "https://via.placeholder.com/300x300" },
  ];

  return (
    <div className="my-10 px-6">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <Card key={i} className="shadow-md rounded-xl">
            <img src={p.img} alt={p.name} className="h-56 w-full object-cover rounded-t-xl" />
            <CardContent className="text-center">
              <Typography variant="h6">{p.name}</Typography>
              <Typography color="textSecondary" className="mb-2">{p.price}</Typography>
              <Button variant="contained" color="primary">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
