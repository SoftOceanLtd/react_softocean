import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`top-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">
        <a href="#home-page" className="nav-logo-link">
          <img src="photos/soft_ocean_final.png" alt="SoftOcean Logo" className="nav-logo" />
        </a>
        <div className="nav-links">
          <a href="#home-page">Home</a>
          <a href="#about">Expertise</a>
          <a href="#projects">Work</a>
          <a href="#portfolio">Vision</a>
          <a href="#FOLLOW-ME" className="btn-contact">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;