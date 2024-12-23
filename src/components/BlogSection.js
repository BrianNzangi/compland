import React from "react";
import { Link } from "react-router-dom";


import top from '../assets/images/top.webp';
import laptop from '../assets/images/laptop.webp';
import xbox from '../assets/images/xbox.jpg';
import keyboard from '../assets/images/keyboard.jpg';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      category: "Tech",
      title: "The Future of Smartphones in 2025",
      brief:
        "Discover how innovations like foldable screens and AI are shaping the smartphone industry.",
      image: top,
    },

    {
      id: 2,
      category: "Laptops",
      title: "Top 5 Laptops for Developers",
      brief:
        "Explore the best laptops for coding and software development in 2024.",
      image: laptop,
    },

    {
      id: 3,
      category: "Gadgets",
      title: "5 Must-Have Gadgets for Productivity",
      brief:
        "Upgrade your workspace with these innovative gadgets designed to boost your productivity.",
      image: xbox,
    },

    {
        id: 4,
        category: "Gadgets",
        title: "5 Must-Have Gadgets for Productivity",
        brief:
          "Upgrade your workspace with these innovative gadgets designed to boost your productivity.",
        image: keyboard,
      },
      
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-outfit font-bold mb-6">Tech Blog that helps the planet</h2>        

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border border-gray-200 rounded overflow-hidden bg-white"
            >
              {/* Image Section */}
              <div className="h-48 bg-gray-200">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-4">
                {/* Category */}
                <p className="text-sm text-[#0071DC] font-outfit font-medium mb-2">
                  {blog.category}
                </p>

                {/* Title */}
                <h3 className="text-lg font-outfit font-semibold mb-2">{blog.title}</h3>

                {/* Brief */}
                <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                  {blog.brief}
                </p>

                {/* See More Link */}
                <a
                  href={`/blog/${blog.id}`}
                  className="text-sm text-[#0071DC] font-outfit font-medium underline hover:text-black"
                >
                  See More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
