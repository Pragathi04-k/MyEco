// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import MyCart from "./pages/MyCart"; // ✅ import MyCart page
import OrderPage from "./pages/OrderPage";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/mycart" element={<MyCart />} /> {/* ✅ Added route */}
          <Route path="/order" element={<OrderPage/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
}
