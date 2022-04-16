import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import FAQ from './Component/FAQ';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<FAQ />} />
    </Routes>
    </BrowserRouter>
  )
}
