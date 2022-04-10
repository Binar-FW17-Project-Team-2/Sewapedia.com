import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import Landingpage from './Pages/LandingPage';

function App() {
  return (
    <div className="App">

      <Routes >
      <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
    </div>
  );
}

export default App;
