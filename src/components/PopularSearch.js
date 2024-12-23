import React from "react";
import { useNavigate } from "react-router-dom";


function PopularSearch() {
  const navigate = useNavigate();

  const keywords = [
    "iPhone 16",
    "HP ZBook",
    "Toshiba Dynabook",
    "Samsung Galaxy S24",
    "MacBook Pro M2",
    "Sony WH-1000XM5",
    "Dell XPS 15",
    "Lenovo ThinkPad",
    "ASUS ROG Zephyrus",
    "Vention Wireless Charger",
    "Vention Erbuds E06",
    "Lenovo ThinkPad",
    "ASUS ROG Zephyrus",
    "Vention Wireless Charger",
  ];

  // Function to calculate width based on keyword length
  const calculateWidth = (keyword) => {
    const length = keyword.length;
    const minWidth = 100; // Minimum width for short keywords
    const maxWidth = 200; // Maximum width for long keywords

    // Calculate width as a proportion of the keyword length
    const width = Math.min(
      Math.max(minWidth + length * 1, minWidth),  // 5px per character
      maxWidth
    );

    return `${width}px`;
  };

  const handleKeywordClick = (keyword) => {
    navigate(`/search?q=${encodeURIComponent(keyword)}`);
  };

  return (
    <section className="bg-white py-8">
      <div className="max-w-[1500px] mx-auto px-4">
        <h2 className="text-2xl font-outfit font-semibold mb-4">Popular Searches</h2>
        <div className="grid grid-cols-auto-fill gap-4">
          {keywords.map((keyword, index) => (
            <button
              key={index}
              onClick={() => handleKeywordClick(keyword)}
              className="border border-gray-300 rounded-full px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularSearch;
