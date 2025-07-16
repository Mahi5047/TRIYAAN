import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem('triyaanLoggedInUser');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('triyaanLoggedInUser');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">TRIYAAN</div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <div className="nav-item">
          <span><Link to="/products">Shop ▾</Link></span>
          <div className="dropdown">
            <ul>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/products/men">Men</Link></li>
              <li><Link to="/products/women">Women</Link></li>
              <li><Link to="/products/kids">Kids</Link></li>
            </ul>
          </div>
        </div>

        <Link to="/about">About</Link>

        {!loggedInUser && <Link to="/login">Login</Link>}
        {!loggedInUser && <Link to="/signup">Sign Up</Link>}

        {loggedInUser && (
          <button className="logout-btn-navbar" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>

      <div className="nav-right">
        <form onSubmit={handleSearch} className="search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
