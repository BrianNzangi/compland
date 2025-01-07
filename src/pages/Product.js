// Product.js or wherever you're displaying products
import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/ProductGrid'; // Adjust the path if necessary

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <ProductGrid products={products} showAll={true} />
    </div>
  );
}

export default Product;