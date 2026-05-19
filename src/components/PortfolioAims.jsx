import React from 'react';
import '../styles/PortfolioAims.css';

const PortfolioAims = () => {
  return (
    <section id="portfolio">
      <div className="container aims-container">
        <div className="aims-content">
          <div className="title-text" style={{ textAlign: 'left', marginBottom: '30px' }}>
            <p>Soft Ocean</p>
            <h2>Aims & Aspirations</h2>
          </div>
          <p className="aims-description">
            Our objective is to aggressively expand our comprehension, knowledge, and service offerings in direct response to rapidly advancing technology. We don't just adapt to the future; we build it.
          </p>
        </div>
        <div className="aims-image">
          <div className="glow-effect"></div>
          <img src="photos/Untitled13_20240529131252 (1).png" alt="SoftOcean Aims" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioAims;