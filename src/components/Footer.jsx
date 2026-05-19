import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <section id="FOLLOW-ME" className="contact-section">
        <h2 className="text-gradient">Let's Connect</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/company/softoceanltd/" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/SoftOceanLtd" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-nav">
          <a href="website-privacy.html">Privacy Policy</a>
          <span className="divider">•</span>
          <a href="website-terms.html">Terms of Service</a>
          <span className="divider">•</span>
          <a href="company-info.html">Company Info</a>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} SoftOcean Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;