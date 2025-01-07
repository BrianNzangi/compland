import React from "react";
import PropTypes from 'prop-types';
import { useCart } from "../contexts/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  // Log product for debugging
  console.log('Product in ProductCard:', product);

  return (
    <div className="bg-white border border-gray-300 rounded-lg h-[400px] flex flex-col overflow-hidden">
      {/* Product Image */}
      <div className="w-full h-[200px] flex items-center justify-center bg-white">
        <img
          src={product?.imageSrc || "default-image.jpg"}
          alt={product?.productName || "Product"}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product Name */}
        <p className="font-outfit text-sm text-gray-700 font-medium mb-4">
          {product?.productName || "Product Name"}
        </p>

        {/* Spacer to push content to the bottom */}
        <div className="flex-grow"></div>

        {/* Price Section */}
        <div className="flex items-baseline space-x-2 mt-2">
          {product?.hasDiscount ? (
            <>
              <p className="text-xl text-[#ff3838] font-outfit font-bold">
                KSh. {product.discountedPrice}
              </p>
              <p className="text-sm text-gray-500 font-outfit line-through">
                KSh. {product.originalPrice}
              </p>
            </>
          ) : (
            <p className="text-lg text-[#222222] font-outfit font-bold">KSh. {product?.originalPrice}</p>
          )}
        </div>

        {/* Add to Basket Button */}
        <button
          className="font-outfit mt-2 bg-[#060D95] text-white py-2 px-4 rounded hover:bg-black"
          onClick={handleAddToCart}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}

// Define PropTypes for type-checking
ProductCard.propTypes = {
  product: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number,
    hasDiscount: PropTypes.bool
  }).isRequired
};

// Set default props
ProductCard.defaultProps = {
  product: {
    imageSrc: "default-image.jpg",
    productName: "Product Name",
    originalPrice: 0
  }
};

export default ProductCard;