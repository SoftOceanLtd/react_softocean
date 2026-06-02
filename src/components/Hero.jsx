import React from 'react';
import WaveCanvas from '../WaveCanvas';
import '../styles/Hero.css';

const Hero = () => {

  // Safely scroll without breaking HashRouter
  const scrollToAbout = (e) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home-page" className="hero-section">
      <WaveCanvas />
      <div className="hero-content">
        <h1 className="hero-title">
          Navigating the <br/> <span className="text-gradient">Digital Deep.</span>
        </h1>
        <p className="hero-subtitle">
          SoftOcean Ltd is a premier IT consultancy delivering strategic digital solutions, specialized design, and transformative technology.
        </p>
        <a href="/" onClick={scrollToAbout} className="hero-btn">Discover Our Expertise</a>
      </div>
    </section>
  );
};

export default Hero;