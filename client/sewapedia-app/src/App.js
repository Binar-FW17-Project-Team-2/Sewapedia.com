import './App.css';
import React from 'react';


import { BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import FAQ from './Component/FAQ';
import CartPage from './Pages/CartPage';


export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<FAQ />} />

    </Routes>
    </BrowserRouter>
  )
}
