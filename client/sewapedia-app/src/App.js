import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import FAQ from "./Component/FAQ";
import ProductDetails from "./Pages/ProductDetails";

// import CartPage from './Pages/CartPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/cart" element={<CartPage />} /> */}
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}
