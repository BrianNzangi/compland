import React from 'react';
import gaming from '../assets/images/gaming.webp'; // Gaming image import
import mobile from '../assets/images/mobile.webp'; // Gaming image import
import watch from '../assets/images/watch.webp'; // Gaming image import
import console from '../assets/images/console.webp'; // Gaming image import
import airf from '../assets/images/airf.webp'; // Gaming image import
import camera from '../assets/images/camera.webp'; // Gaming image importcamera

const categories = [
    { id: 1, name: 'Gaming Accessories', icon: gaming }, 
    { id: 2, name: 'iPhones & iPads', icon: mobile },
    { id: 3, name: 'Smart Watches', icon: watch },  
    { id: 4, name: 'Console Gaming', icon: console },
    { id: 5, name: 'Air Fryers', icon: airf },
    { id: 6, name: 'Action Cameras & Drones', icon: camera },
    { id: 7, name: 'Smart Watches', icon: watch },  
    { id: 8, name: 'Console Gaming', icon: console },
    { id: 9, name: 'Console Gaming', icon: console },
    { id: 1, name: 'Console Gaming', icon: console },
    // Add more categories as needed
  ];
  
  function CategoriesSection() {
    return (
      <section className="bg-white py-6">
        <div className="max-w-[1460px] mx-auto">
          <h2 className="text-2xl font-outfit font-medium mb-4">Shop by Categories</h2>
          
          {/* Categories Grid Container */}
          <div className="grid grid-cols-10 gap-6">
            {/* Category Circles */}
            {categories.slice(0, 10).map((category) => (
              <div key={category.id} className="flex flex-col items-center">
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 border border-gray-300 overflow-hidden">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-[80%] h-[80%] object-contain"
                  />
                </div>
                <p className="text-center font-outfit text-sm font-normal mt-2">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default CategoriesSection;