
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Auth/LoginPage";
import FAQ from "./Component/FAQ";
import RegisterPage from "./Pages/Auth/RegisterPage";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Users from './Pages/Users/Users';
import Transactions from './Pages/Transactions/Transactions';
import Categories from './Pages/Categories/Categories';
import DashboardMenu from './Component/AdminDashboard/DashboardMenu';
import Product from "./Pages/Product";
import Categorys from "./Pages/Category/Dashboard";
import AddCategory from "./Pages/Category/AddCategory";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<DashboardMenu />} />
      <Route path='/user' element={<Users />} />
      <Route path="/product" element={<Product />} />
   
      <Route path='/about' element={<About />} />
      <Route path='/transactions' element={<Transactions />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/category' element={<Categorys />} />
      <Route path='/category/add' element={<AddCategory />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/signIn" element={<LoginPage />} />
      <Route path="/signUp" element={<RegisterPage />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
    </Routes>
  )
}

