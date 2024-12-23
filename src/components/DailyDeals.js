import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard"; // Adjust the path based on where ProductCard is located

import keyboard from '../assets/images/keyboard.webp';
import dell from '../assets/images/dell.webp';

function DailyDeals() {
  return (
    <section className="flex justify-center bg-[#ffffff]">
      {/* Container limited to 1280px */}
      <div className="max-w-[1500px] w-full rounded-md bg-[#0071DC] py-6 px-4 flex flex-col md:flex-row">
          {/* Right Column: Heading, Subheading, Button */}
           <div className="flex-1 flex-col justify-start max-w-[300px] font-outfit text-white py-20 gap-6 mt-4">
             <h2 className="text-3xl font-bold leading-tight">Daily Deals</h2>
             <p className="text-lg mb-4 leading-snug">
                Don’t miss out on today’s best tech deals. Save big while supplies last!
             </p>
             <Link to="/deals" className="bg-[#FACC15] text-black py-2 px-6 rounded-sm font-medium shadow-md hover:opacity-90">
               Shop All Deals
             </Link>
           </div>

        {/* Left Column: Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
          <Link to="/product/1">
            <ProductCard
              hasDiscount={false}
              originalPrice="34,999"
              discountedPrice="29,999"
              productName="THE G-LAB Combo Helium 4-in-1 Keyboard, Gaming Mouse, Headset, Mouse Pad"
              imageSrc={keyboard}
            />
          </Link>
          <Link to="/product/2">
            <ProductCard
              hasDiscount={false}
              originalPrice="14,999"
              discountedPrice="9,999"
              productName="Samsung EVO Plus 128GB MicroSD Card with Adapter - Excellent"
              imageSrc={dell}
            />
          </Link>
          <Link to="/product/3">
            <ProductCard
              hasDiscount={false}
              originalPrice="10,499"
              discountedPrice="5,999"
              productName="Logitech Wireless Mouse M185 - Compact and Reliable"
              imageSrc={keyboard}
            />
          </Link>
          <Link to="/product/4">
            <ProductCard
              hasDiscount={false}
              originalPrice="9,999"
              discountedPrice="7,999"
              productName="HP Pavilion USB-C Dock - Refurbished"
              imageSrc={dell}
            />
          </Link>
        </div>        
      </div>
    </section>
  );
}

export default DailyDeals;
