import React from "react";

function ProductCard({ hasDiscount, originalPrice, discountedPrice, productName, imageSrc }) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg h-[400px] flex flex-col overflow-hidden">
      {/* Product Image */}
      <div className="w-full h-[200px] flex items-center justify-center bg-white">
        <img
          src={imageSrc}
          alt={productName}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product Name */}
        <p className="font-outfit text-sm text-gray-700 font-medium mb-4">{productName}</p>

        {/* Spacer to push content to the bottom */}
        <div className="flex-grow"></div>

        {/* Price Section */}
        <div className="flex items-baseline space-x-2 mt-2">
          {hasDiscount ? (
            <>
              <p className="text-xl text-[#16A34A] font-outfit font-bold">KSh. {discountedPrice}</p>
              <p className="text-sm text-gray-500 font-outfit line-through">Ksh. {originalPrice}</p>
            </>
          ) : (
            <p className="text-lg text-[#0071DC] font-bold">KSh. {originalPrice}</p>
          )}
        </div>

        {/* Add to Basket Button */}
        <button className="font-outfit mt-2 bg-[#0071DC] text-white py-2 px-4 rounded hover:bg-black">
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
