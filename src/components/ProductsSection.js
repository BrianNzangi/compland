import React from 'react';
import ProductCard from './ProductCard';  // Assuming ProductCard is in the same directory
import { Link } from 'react-router-dom';  // For navigation

// Product data
import keyboard from '../assets/images/keyboard.webp';
import dell from '../assets//images/dell.webp';

function ProductsSection() {
  return (
    <section className="bg-white py-8">
      <div className="p-0 max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-outfit font-semibold">
            Selling Fast <span className="text-gray-500 text-base font-normal">(5 items)</span>
          </h2>
          <Link to="/products" className="text-sm font-outfit font-medium text-[#0071DC] hover:underline">
            View All
          </Link>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Product Cards with local images */}
          <Link to="/product/1">
            <ProductCard
              hasDiscount={true}
              originalPrice="34,999"
              discountedPrice="29,999"
              productName="THE G-LAB Combo Helium 4-in-1 Keyboard, Gaming Mouse, Headset, Mouse Pad"
              imageSrc={keyboard}
            />
          </Link>

          <Link to="/product/2">
            <ProductCard
              hasDiscount={true}
              originalPrice="25,999"
              discountedPrice="22,999"
              productName="Refurbished Dell Latitude 7490 Intel Core i5-8350U 14 Laptop - Black"
              imageSrc={dell}
            />
          </Link>

          <Link to="/product/3">
            <ProductCard
              hasDiscount={true}
              originalPrice="25,999"
              discountedPrice="22,999"
              productName="Refurbished Dell Latitude 7490 Intel Core i5-8350U 14 Laptop - Black"
              imageSrc={dell}
            />
          </Link>

          <Link to="/product/4">
            <ProductCard
              hasDiscount={true}
              originalPrice="25,999"
              discountedPrice="22,999"
              productName="Refurbished Dell Latitude 7490 Intel Core i5-8350U 14 Laptop - Black"
              imageSrc={dell}
            />
          </Link>

          <Link to="/product/5">
            <ProductCard
              hasDiscount={true}
              originalPrice="25,999"
              discountedPrice="22,999"
              productName="Refurbished Dell Latitude 7490 Intel Core i5-8350U 14 Laptop - Black"
              imageSrc={dell}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
