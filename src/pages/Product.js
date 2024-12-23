import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Product Details</h1>
      <p>You're viewing the product with ID: {id}</p>
      <p className="mt-4">More product details will go here...</p>
    </div>
  );
}

export default Product;
