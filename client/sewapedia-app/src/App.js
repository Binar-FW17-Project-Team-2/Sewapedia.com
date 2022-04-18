import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Products from './Pages/Products/Products';
import Users from './Pages/Users/Users';
import Transactions from './Pages/Transactions/Transactions';
import Categories from './Pages/Categories/Categories';
import DashboardMenu from './Component/AdminDashboard/DashboardMenu';
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
// import CartPage from './Pages/CartPage';


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<DashboardMenu />} />
       {/* <Route path="/cart" element={<CartPage />} /> */}
      <Route path='/user' element={<Users />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path='/about' element={<About />} />
      <Route path='/transactions' element={<Transactions />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
  )
