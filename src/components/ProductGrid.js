// ProductGrid.js
import React, { useState } from "react";
import ProductCard from "../components/ProductCard"; // Adjust the path if necessary

const ProductGrid = ({ products, showAll = false }) => {
  const [visibleProducts, setVisibleProducts] = useState(showAll ? products.length : 5);

  const handleViewAll = () => {
    setVisibleProducts(visibleProducts === products.length ? 5 : products.length);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.slice(0, visibleProducts).map((product, index) => (
          <ProductCard key={product.id || index} product={product} />
        ))}
      </div>
      {!showAll && (
        <div className="text-center mt-4">
          <button 
            onClick={handleViewAll}
            className="bg-[#0071DC] text-white py-2 px-4 rounded hover:bg-black"
          >
            {visibleProducts === products.length ? 'View Less' : 'View All'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;