import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
