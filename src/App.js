import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import AuthPage from './components/AuthPage';
import AllProducts from './components/allproducts';
import About from './components/about';
import MenProducts from './components/mens';
import WomenProducts from './components/womens';
import KidsProducts from './components/kids';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/men" element={<MenProducts />} />
        <Route path="/products/women" element={<WomenProducts />} />
        <Route path="/products/kids" element={<KidsProducts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
