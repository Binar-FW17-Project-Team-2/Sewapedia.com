import "./App.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Auth/LoginPage";
import FAQ from "./Component/FAQ";
import RegisterPage from "./Pages/Auth/RegisterPage";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Users from "./Pages/Users/Users";
import Transactions from "./Pages/Transactions/Transactions";
import DashboardMenu from "./Component/AdminDashboard/DashboardMenu";
import Product from "./Pages/Product";
import Category from "./Pages/Category/";
import AddCategory from "./Pages/Category/AddCategory";
import Products from "./Pages/Products/Products";
import UserEdit from "./Pages/Users/UserEdit";
import AddProduct from "./Pages/Products/AddProduct";
import SewaProduct from "./Pages/SewaProduct";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:productId" element={<SewaProduct />} />
      <Route path="/about" element={<About />} />
      <Route path="/category/add" element={<AddCategory />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/signIn" element={<LoginPage />} />
      <Route path="/signUp" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      {/* admin dashboard */}
      <Route path="/categories" element={<Category />} />
      <Route path="/dashboard" element={<DashboardMenu />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/user" element={<Users />} />
      <Route path="/user/edit/:id" element={<UserEdit />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/add" element={<AddProduct />} />
      {/* pls implement not found */}
      <Route path="404" element={<NotFound />} />
      <Route path="/*" element={<Navigate to='/404'/>} />
    </Routes>
  );
}
