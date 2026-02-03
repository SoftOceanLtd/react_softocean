import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <>
      <section id="FOLLOW-ME">
        <div className="social-links">
          <a href="https://www.linkedin.com/company/softoceanltd/" target="_blank" className="social-icon">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/SoftOceanLtd" target="_blank" className="social-icon">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
        </div>
      </section>

      <footer style={{ background: '#001936', textAlign: 'center', padding: '20px', borderTop: '1px solid #1c6f96' }}>
        <div className="nav-container" style={{ justifyContent: 'center', gap: '20px' }}>
          <a href="website-privacy.html" style={{ color: '#666' }}>Website Privacy</a>
          <a href="website-terms.html" style={{ color: '#666' }}>Website Terms</a>
          <a href="company-info.html" style={{ color: '#666' }}>Company Info</a>
        </div>
        <p style={{ color: '#666', marginTop: '10px' }}>&copy; 2024 SoftOcean Ltd</p>
      </footer>
    </>
  );
};

export default Footer;