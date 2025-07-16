import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    
      {/* Welcome Message */}
      <div className="welcome-message">
        Welcome back to <span className="highlight">Triyaan</span>!
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Style That Speaks</h1>
          <p>
            Triyaan – Where Style Meets Soul
          </p>
          <button onClick={() => navigate('/products')}>Shop Now</button>
        </div>

        <div className="hero-image">
          <img
            src="https://static.toiimg.com/photo/107885952/107885952.jpg"
            alt="Model Wearing Clothes"
          />
        </div>
      </section>

      {/* Product Category Cards */}
      <section className="image-card-section">
        <div className="image-card" onClick={() => navigate('/products/men')}>
          <img
            src="https://th.bing.com/th/id/OIP.uHITpNjUwsVe5gunAh4hwgAAAA?rs=1&pid=ImgDetMain"
            alt="Men's Wear"
          />
          <div className="card-content">
            <h3>Men's Collection</h3>
            <p>Explore modern fits for everyday fashion.</p>
          </div>
        </div>

        <div className="image-card" onClick={() => navigate('/products/women')}>
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/9/BS/PM/NF/160872806/designer-cotton-kurtis-217--500x500.jpeg"
            alt="Women's Wear"
          />
          <div className="card-content">
            <h3>Women's Collection</h3>
            <p>Graceful silhouettes and timeless designs.</p>
          </div>
        </div>

        <div className="image-card" onClick={() => navigate('/products/kids')}>
          <img
            src="https://th.bing.com/th/id/OIP.koqxa86nXWb-FOFNjuKdfAHaHa?rs=1&pid=ImgDetMain"
            alt="Kid's Collection"
          />
          <div className="card-content">
            <h3>Kid's Collection</h3>
            <p>Inclusive styles for every body.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>Triyaan</h2>
            <p>Elevate your wardrobe with timeless fashion trends.</p>
          </div>

          <div className="footer-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 Triyaan. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
