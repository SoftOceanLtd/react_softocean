import React from 'react';
import '../styles/PortfolioAims.css';

const PortfolioAims = () => {
  return (
    <section id="portfolio" className="aims-v2-section">
      <div className="container aims-v2-container">
        
        {/* Left Side: Floating Glass Cards */}
        <div className="aims-v2-text">
          <div className="title-text" style={{ textAlign: 'left', marginBottom: '30px' }}>
            <p>Soft Ocean</p>
            <h2>Aims & Aspirations</h2>
          </div>
          
          <div className="aims-glass-card aims-main-card">
            <p>
              Our objective is to aggressively expand our comprehension, knowledge, and service offerings in direct response to rapidly advancing technology. We don't just adapt to the future; we build it.
            </p>
          </div>
        </div>

        {/* Right Side: Framed Image */}
        <div className="aims-v2-image">
          <div className="aims-image-frame">
            <img src="photos/Untitled13_20240529131252 (1).png" alt="SoftOcean Aims" />
            <div className="aims-cyan-glow"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioAims;