import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext"; // Import CartProvider
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from "./pages/Home";
import Product from "./pages/Product";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <CartProvider> {/* Wrap your app in CartProvider */}
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
