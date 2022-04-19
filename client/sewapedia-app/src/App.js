import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Users from './Pages/Users/Users';
import Transactions from './Pages/Transactions/Transactions';
import Categories from './Pages/Categories/Categories';
import DashboardMenu from './Component/AdminDashboard/DashboardMenu';
import AddProduct from './Pages/Products/AddProduct';


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<DashboardMenu />} />
      <Route path='/user' element={<Users />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />} />
      <Route path='/addproduct' element={<AddProduct />} />
      <Route path='/transactions' element={<Transactions />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
  )
}
