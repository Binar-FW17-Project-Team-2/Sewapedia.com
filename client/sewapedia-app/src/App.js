import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import Landingpage from './Pages/LandingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landingpage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={< RegisterPage />} />
      <Route path='/forgotpassword' element={<ForgotPassword />} />
      
    </Routes>

  );
}

export default App;