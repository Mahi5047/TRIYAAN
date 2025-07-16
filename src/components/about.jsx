import './about.css';
import { useLocation, useNavigate, Link } from 'react-router-dom';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Triyaan</h2>
        <p>
          At <strong>Triyaan</strong>, we blend timeless fashion with modern comfort. 
          Our collections for men, women, and kids reflect quality, style, and sustainability. 
          Whether you're dressing for a casual day out or a special occasion, Triyaan delivers 
          outfits that make you feel confident and look stunning.
        </p>
        <p>
          Inspired by culture, crafted with care — your fashion journey starts here with Triyaan.
        </p>
      </div>
    </section>
  );
}

export default About;
