import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import FAQ from './Component/FAQ';
import CartPage from './Pages/CartPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/faq' element={<FAQ />} />
    </Routes>

  );
}

export default App;