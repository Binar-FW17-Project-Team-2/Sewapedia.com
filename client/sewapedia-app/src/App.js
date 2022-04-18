import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Auth/LoginPage";
import FAQ from "./Component/FAQ";
import RegisterPage from "./Pages/Auth/RegisterPage";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";

// import CartPage from './Pages/CartPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/signIn" element={<LoginPage />} />
      <Route path="/signUp" element={<RegisterPage />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      {/* <Route path="/cart" element={<CartPage />} /> */}
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}
