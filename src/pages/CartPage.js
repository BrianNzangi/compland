import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BsBox2 } from "react-icons/bs";
import { PiShoppingCart } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { LiaWalletSolid } from "react-icons/lia";

const CartPage = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link to="/cart" className="text-[#0071DC] hover:underline">
            1. Cart
          </Link>
          <span className="mx-2">{">"}</span>
          <span className="text-gray-400">2. Shipping</span>
          <span className="mx-2">{">"}</span>
          <span className="text-gray-400">3. Payment</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Cart Items */}
          <div className="lg:col-span-2">
            {/* Cart Product */}
            <div className="border p-4 bg-white shadow-sm rounded-lg mb-6">
              <h2 className="text-lg font-bold mb-4">Your Cart</h2>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src="/path/to/product-image.jpg"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-800">Product Name</h3>
                    <p className="text-sm text-gray-600">Qty: 1</p>
                  </div>
                </div>
                <p className="text-gray-800 font-bold">KSh. 19,999</p>
              </div>
            </div>

            {/* Frequently Bought With */}
            <div className="border p-4 bg-white shadow-sm rounded-lg">
              <h2 className="text-lg font-bold mb-4">Frequently Bought With</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="border p-2 rounded-lg shadow-sm flex flex-col items-center"
                  >
                    <img
                      src="/path/to/product-image.jpg"
                      alt="Product"
                      className="w-24 h-24 object-cover mb-2"
                    />
                    <p className="text-sm font-medium text-gray-800">
                      Product Name
                    </p>
                    <p className="text-sm text-gray-600">KSh. 4,999</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Cart Totals */}
          <div>
            {/* Cart Totals */}
            <div className="border p-4 bg-white shadow-sm rounded-lg mb-6">
              <h2 className="text-lg font-bold mb-4">Total</h2>
              <p className="text-gray-600 text-sm mb-2">
                Tax calculated at checkout
              </p>
              <p className="text-xl font-bold mb-4">KSh. 59,999</p>
              <button className="w-full bg-[#0071DC] text-white py-2 rounded hover:bg-[#005bb5]">
                Checkout
              </button>
            </div>

            {/* USPs */}
            <div className="border p-4 bg-white shadow-sm rounded-lg">
              <h2 className="text-lg font-bold mb-4">Buy with Peace of Mind</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <BsBox2 size={20} className="text-[#0071DC] mr-2" />
                  <span className="text-sm text-gray-800">
                    30 Days Money Back Guarantee
                  </span>
                </li>
                <li className="flex items-center">
                  <PiShoppingCart size={20} className="text-[#0071DC] mr-2" />
                  <span className="text-sm text-gray-800">
                    Free Shipping & Returns
                  </span>
                </li>
                <li className="flex items-center">
                  <GoPeople size={20} className="text-[#0071DC] mr-2" />
                  <span className="text-sm text-gray-800">
                    12 Months Warranty
                  </span>
                </li>
                <li className="flex items-center">
                  <LiaWalletSolid size={20} className="text-[#0071DC] mr-2" />
                  <span className="text-sm text-gray-800">
                    Guaranteed quality. No extra fee
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
