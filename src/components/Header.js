import React from "react";
import { PiPackageFill } from "react-icons/pi"; // Order Tracking Icon
import { IoCall } from "react-icons/io5"; // Phone Icon
import Logo from '../assets/images/Logo.png'; // Logo Image
import { IoMdSearch } from "react-icons/io"; // Search Icon
import { FaHeart } from "react-icons/fa"; // Wish List Icon
import { RiAccountCircleFill } from "react-icons/ri"; // Account Icon
import { FaCartShopping } from "react-icons/fa6"; // Cart Icon


function Header() {
  return (
    <header className="bg-[#ff3838] text-white">
      {/* First Row */}
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto max-w-screen-xl flex justify-between items-center py-2">
          {/* Left Col */}
          <div className="flex space-x-6 font-outfit font-normal text-sm">
            <a href="/returns" className=".">Returns</a>
            <a href="/about-us" className=".">Help & Support</a>
            <a href="/help-support" className=".">Tech Talk</a>
            <a href="/help-support" className=".">Business</a>
          </div>

          {/* Right Col */}
          <div className="flex space-x-6 font-outfit font-normal text-sm">
            {/* Order Tracking */}
            <a href="/order-tracking" className="flex items-center space-x-2">
              <PiPackageFill size={16} />
              <span>Track Your Order </span>
            </a>
            {/* Contact */}
            <a href="tel:+254 712-345678" className="flex items-center space-x-2">
              <IoCall size={16} />
              <span>+254 712-345678</span>
            </a>
          </div>
        </div>
      </div>
      {/* Stroke */}
      <div className="mx-auto w-[1280px] border-b opacity-50" style={{ borderColor: "#d2e4fb" }}></div>
      
      {/* Second Row */}
      <div className="w-full">
       <div className="container mx-auto max-w-screen-xl flex items-center justify-between py-4">
        {/* Column 1: Logo */}
        <div className="flex items-center">
         <a href="/" className="flex items-center">
           <img
             src={Logo}
             alt="Ecom App Logo"
             className="h-14 w-auto"
            />
         </a>
        </div>

        {/* Column 2: Search Bar */}
        <div className="flex-grow mx-8">
         <div className="relative">
           {/* Input Field */}
           <input
             type="text"
             placeholder="Search everything at Compland online store..."
             className="w-full border border-gray-300 rounded-full py-4 px-4 pr-12 font-outfit text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0071DC] placeholder:animate-typewriter"
            />
    
           {/* Icon */}
           <button 
             type="button" 
             className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 bg-[#FACC15] rounded-full p-2 hover:bg-[#fbd248] focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
             >
             <IoMdSearch className="text-black w-6 h-6" />
            </button>
         </div>
        </div>

        {/* Column 3: Wishlist, Account, Cart */}
        <div className="flex items-center space-x-6 font-outfit text-sm">
          {/* Wishlist */}
          <a href="/wishlist" className="flex items-center space-x-2 hover:.">
           <FaHeart className="w-5 h-5 text-white" />
           <span>Wish List</span>
         </a>

         {/* Account */}
         <a href="/account" className="flex items-center space-x-2 hover:.">
           <RiAccountCircleFill className="w-6 h-6 text-white" />
           <span>Account</span>
         </a>

         {/* Cart */}
         <a href="/cart" className="flex items-center space-x-2 hover:.">
           <FaCartShopping className="w-5 h-5 text-white" />
           <span>Your Basket</span>
         </a>        
    </div>
  </div>
</div>

{/* Third Row: Categories, Deals, Brands */}
<div className="bg-[#ffeeeb] w-full border-t border-opacity-50 border-[#d2e4fb]">
        <div className="container mx-auto max-w-screen-xl py-2 flex justify-between font-outfit text-base font-medium">          
          {/* Categories - Left Column */}
          <div className="text-[#213038] flex space-x-6">
            <a href="/tv-audio" className="hover:underline">TV & Audio</a>
            <a href="/electronics" className="hover:underline">Computing</a>
            <a href="/fashion" className="hover:underline">Appliances</a>
            <a href="/home-appliances" className="hover:underline">Phones</a>
            <a href="/home-appliances" className="hover:underline">Smart Tech</a>
            <a href="/home-appliances" className="hover:underline">Phones</a>
          </div>
          
          {/* Deals & Brands - Right Column */}
          <div className="flex space-x-6 just">
            <a href="/deals" className="text-[#ff3838] hover:underline">Business</a>
            <a href="/deals" className="text-[#213038] hover:underline">Brands</a>
            <a  href="/deals"  className="bg-[#FACC15] text-[#000000] border border-[#FACC15] py-0 px-4 rounded-full hover:bg-transparent hover:text-[#FACC15] hover:border-[#FACC15] transition-colors duration-300">
              Deals
            </a>
          </div>
        </div>
      </div>
    </header>   
    
  );
}

export default Header;
