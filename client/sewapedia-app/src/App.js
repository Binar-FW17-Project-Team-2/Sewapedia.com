import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import FAQ from './Component/FAQ';
import DashboardAdmin from './Component/AdminDashboard/DashboardAdmin';
import Products from './Pages/Products';
import Users from './Pages/Users';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<DashboardAdmin />} />
      <Route path='/users' element={<Users />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
    </Routes>

  );
}

export default App;