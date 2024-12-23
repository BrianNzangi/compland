import React from "react";
import { Link } from "react-router-dom";
import { BsBox2 } from "react-icons/bs";
import { PiShoppingCart } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { LiaWalletSolid } from "react-icons/lia";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F2323] text-white pt-0 pb-8">
      {/* Compland USP Section */}
      <section className="bg-[#F2F2F2] py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-outfit">
            {/* Column 1 */}
            <div className="flex flex-col items-center text-center">
              <BsBox2 size={25} className="text-[#0071DC]" />
              <h1 className="text-lg font-medium mt-4 text-black">Free Delivery</h1>
              <p className="mt-0 text-lg text-gray-600">Right at your desktop</p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center text-center">
              <PiShoppingCart size={25} className="text-[#0071DC]" />
              <h1 className="text-lg font-medium mt-4 text-black">Satisfaction Promised</h1>
              <p className="mt-0 text-lg text-gray-600">30 days free returns</p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center text-center">
              <GoPeople size={25} className="text-[#0071DC]" />
              <h1 className="text-lg font-medium mt-4 text-black">Excellent Support</h1>
              <p className="mt-0 text-lg text-gray-600">Quick responses</p>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-center text-center">
              <LiaWalletSolid size={25} className="text-[#0071DC]" />
              <h1 className="text-lg font-medium mt-4 text-black">Secure Payment</h1>
              <p className="mt-0 text-lg text-gray-600">Several options available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links Section */}
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-8 font-outfit py-16">
        {/* Column 1 - About */}
        <div>
          <h2 className="font-medium text-base">ABOUT</h2>
          <ul className="mt-4 space-y-2 font-light">
            <li><Link to="/about" className="hover:text-[#FACC15]">About Compland</Link></li>
            <li><Link to="/blog" className="hover:text-[#FACC15]">Our Blog</Link></li>
            <li><Link to="/reviews" className="hover:text-[#FACC15]">Customer Reviews</Link></li>
            <li><Link to="/careers" className="hover:text-[#FACC15]">We're Hiring!</Link></li>
          </ul>
        </div>

        {/* Column 2 - Terms */}
        <div>
          <h2 className="font-medium text-base">TERMS</h2>
          <ul className="mt-4 space-y-2 font-light">
            <li><Link to="/warranty" className="hover:text-[#FACC15]">Warranty & Refunds</Link></li>
            <li><Link to="/shipping-policy" className="hover:text-[#FACC15]">Shipping Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-[#FACC15]">Terms of Service</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-[#FACC15]">Privacy Policy</Link></li>
            <li><Link to="/dmca-policy" className="hover:text-[#FACC15]">DMCA Policy</Link></li>
          </ul>
        </div>

        {/* Column 3 - Help */}
        <div>
          <h2 className="font-medium text-base">HELP</h2>
          <ul className="mt-4 space-y-2 font-light">
            <li><Link to="/track-order" className="hover:text-[#FACC15]">Track My Order</Link></li>
            <li><Link to="/help-center" className="hover:text-[#FACC15]">Help Center</Link></li>
            <li><Link to="/returns" className="hover:text-[#FACC15]">Returns & Claims</Link></li>
            <li><Link to="/contact" className="hover:text-[#FACC15]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 4 - Subscribe */}
        <div>
          <h2 className="font-medium text-base">SUBSCRIBE</h2>
          <p className="mt-4 text-sm">Unlock exclusive discounts, new arrivals, and daily deals. Join our community today!</p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full p-2 text-black"
            />
            <button type="submit" className="w-full mt-4 bg-[#0071DC] text-white p-2 rounded-sm">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Last Row with Social Media and Copyright */}
      <div className="border-t border-gray-600 py-4">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <div className="text-sm text-gray-400">&copy; 2024 Compland Company. All rights reserved.</div>
          <div className="flex space-x-4">
            <Link to="https://facebook.com" className="text-gray-400 hover:text-[#0071DC]"><FaFacebookF size={20} /></Link>
            <Link to="https://twitter.com" className="text-gray-400 hover:text-[#0071DC]"><FaTwitter size={20} /></Link>
            <Link to="https://instagram.com" className="text-gray-400 hover:text-[#0071DC]"><FaInstagram size={20} /></Link>
            <Link to="https://linkedin.com" className="text-gray-400 hover:text-[#0071DC]"><FaLinkedin size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

