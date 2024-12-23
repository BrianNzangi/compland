import React from "react";

import apple from '../assets/images/apple.png';
import asus from '../assets/images/asus.png';
import dell from '../assets/images/dell.png';
import lenovo from '../assets/images/lenovo.png';
import msi from '../assets/images/msi.png';
import hp from '../assets/images/hp.png';
import presto from '../assets/images/presto.png';
import samsung from '../assets/images/samsung.png';

const OfficialStores = () => {
  const brands = [
    { name: "Brand 1", logo: apple },
    { name: "Brand 2", logo: asus },
    { name: "Brand 3", logo: dell },
    { name: "Brand 4", logo: lenovo },
    { name: "Brand 5", logo: msi },
    { name: "Brand 6", logo: hp },
    { name: "Brand 7", logo: presto },
    { name: "Brand 8", logo: samsung },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-[1500px] mx-auto px-2">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-outfit font-semibold">Official Stores</h2>
          <button className="text-sm font-outfit font-medium text-[#0071DC] hover:underline">
            View All
          </button>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded flex items-center justify-center h-[121px] w-[161px] bg-white"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-[90%] max-w-[90%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficialStores;
