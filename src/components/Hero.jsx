import React from 'react';
import WaveCanvas from '../WaveCanvas';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home-page" style={{ position: 'relative' }}>
      <div className="banner-text">
        <h1>SoftOcean Ltd</h1>
      </div>
      <div className="banner-logo">
        <img src="photos/soft_ocean_final.png" alt="logo" />
      </div>
      <WaveCanvas />
    </section>
  );
};

export default Hero;