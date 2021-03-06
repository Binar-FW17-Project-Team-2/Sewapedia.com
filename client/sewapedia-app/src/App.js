import './App.css';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import LoginPage from './Pages/Auth/LoginPage';
import FAQ from './Component/FAQ';
import RegisterPage from './Pages/Auth/RegisterPage';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import ResetPassword from './Pages/Auth/ResetPassword';
import Users from './Pages/Users/Users';
import Transactions from './Pages/Transactions/Transactions';
import DashboardMenu from './Component/AdminDashboard/DashboardMenu';
// import Product from "./Pages/Product";
import Category from './Pages/Category/';
import AddCategory from './Pages/Category/AddCategory';
import Products from './Pages/Products/Products';
import UserEdit from './Pages/Users/UserEdit';
import AddProduct from './Pages/Products/AddProduct';
import SewaProduct from './Pages/SewaProduct';
import NotFound from './Pages/NotFound';
import EditProduct from './Pages/Products/EditProduct';
import EditCategory from './Pages/Category/EditCategory';
import Landing from './Pages/Landing';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import AllProduct from './Pages/AllProduct';
import UserProfile from './Pages/Users/UserProfile';
import Wishlist from './Pages/Wishlist';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Landing />} />
        <Route path="product" element={<AllProduct />} />
        <Route path="product/:productId" element={<SewaProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="faq" element={<FAQ />} />
      </Route>

      <Route path="/about" element={<About />} />
      <Route path="/signIn" element={<LoginPage />} />
      <Route path="/signUp" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/resetpassword/:token" element={<ResetPassword />} />
      <Route path="/wishlist" element={<Wishlist />} />

      {/* admin dashboard */}
      <Route path="/categories" element={<Category />} />
      <Route path="/category/add" element={<AddCategory />} />
      <Route path="/category/edit/:name" element={<EditCategory />} />
      <Route path="/dashboard" element={<DashboardMenu />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/user" element={<Users />} />
      <Route path="/user/edit/:id" element={<UserEdit />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/add" element={<AddProduct />} />
      <Route path="/products/edit/:productId" element={<EditProduct />} />
      <Route path="/profile/:id" element={<UserProfile />} />
      {/* pls implement not found */}
      <Route path="404" element={<NotFound />} />
      <Route path="/*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
