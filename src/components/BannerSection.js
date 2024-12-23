import React from "react";

import banner1 from '../assets/images/banner1.webp'; // Logo Image

function BannerSection() {
  return (
    <section className="bg-white py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Banner 1 */}
          <div className="relative bg-[#f4f4f4] rounded overflow-hidden h-[150px]">
            <img
              src={banner1}
              alt="Banner 1"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Banner 2 */}
          <div className="relative bg-[#f4f4f4] rounded overflow-hidden h-[150px]">
            <img
              src={banner1}
              alt="Banner 2"
              className="w-full h-auto object-cover"
            />            
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
