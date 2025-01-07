import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';  // Assuming ProductCard is in the same directory
import { Link } from 'react-router-dom';

function ProductsSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <section className="bg-white py-8">
      <div className="p-0 max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-outfit font-semibold">
            Selling Fast <span className="text-gray-500 text-base font-normal">({products.length} items)</span>
          </h2>
          <Link to="/Product" className="text-sm font-outfit font-medium text-[#ff3838] hover:underline">
            View All
          </Link>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:grid-row-1">
          {/* Dynamically render Product Cards */}
          {products.map(product => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard
                product={{
                  productName: product.title,
                  originalPrice: product.price,
                  discountedPrice: product.price * 0.9, // Assuming a 10% discount
                  imageSrc: product.image,
                  hasDiscount: product.price < 30, // Example: Discount if price is less than 30
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
