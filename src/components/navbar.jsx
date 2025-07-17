import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleShopDropdown = () => {
    setShopOpen(!shopOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">TRIYAAN</div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>

        <div className="nav-item" onClick={toggleShopDropdown}>
          <span className="shop-toggle">Shop ▾</span>
          <div className={`dropdown ${shopOpen ? 'open' : ''}`}>
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
