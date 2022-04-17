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


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<DashboardMenu />} />
      <Route path='/users' element={<Users />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
      <Route path='/transactions' element={<Transactions />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
  )
}
