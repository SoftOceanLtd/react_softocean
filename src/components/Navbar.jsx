import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // NEW: Safely scroll to sections without triggering a HashRouter page change
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Stop the blank page issue
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`top-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">
        <a href="/" onClick={(e) => scrollToSection(e, 'home-page')} className="nav-logo-link">
          <img src="photos/soft_ocean_final.png" alt="SoftOcean Logo" className="nav-logo" />
        </a>
        <div className="nav-links">
          <a href="/" onClick={(e) => scrollToSection(e, 'home-page')}>Home</a>
          <a href="/" onClick={(e) => scrollToSection(e, 'about')}>Expertise</a>
          <a href="/" onClick={(e) => scrollToSection(e, 'projects')}>Work</a>
          <a href="/" onClick={(e) => scrollToSection(e, 'portfolio')}>Vision</a>
          <a href="/" onClick={(e) => scrollToSection(e, 'FOLLOW-ME')} className="btn-contact">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;