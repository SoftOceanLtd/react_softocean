import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="title-text">
          <p>Currently</p>
          <h2>What We Do</h2>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <div className="icon-wrapper"><i className="fa-solid fa-network-wired"></i></div>
            <h3>IT Consultancy</h3>
            <p>We provide expert advice and strategic guidance to businesses, optimizing how IT resources are utilized to meet core objectives.</p>
          </div>
          <div className="about-card">
            <div className="icon-wrapper"><i className="fa-solid fa-pen-nib"></i></div>
            <h3>Specialised Design</h3>
            <p>Engaging in highly specialized design activities to create aesthetic and functional solutions tailored to specific industry needs.</p> 
          </div>
          <div className="about-card image-card">
            {/* The image is handled in CSS */}
            <div className="image-overlay">
              <h3>Innovation at Core</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;