import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="top-nav">
      <div className="nav-container">
        <img src="photos/soft_ocean_final.png" alt="Logo" className="nav-logo" />
        <a href="#home-page">Home</a>
        <a href="#about">About Us</a>
        <a href="#projects">Projects</a>
        <a href="#portfolio">Aims</a>
        <a href="#FOLLOW-ME">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;