import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about">
      <div className="title-text">
        <p>Currently</p>
        <h5>What we do</h5>
      </div>
      <div className="about-row">
        <div className="about-col">
          <p>As an Information technology consultancy company, we involve providing expert advice and strategic guidance to businesses on how best to utilize IT resources to meet their objectives.</p>
        </div>
        <div className="about-col">
          <p>Additionally, we do Specialised design activities which involve in creating specific aesthetic or functional designs tailored to meet the needs of different industries.</p> 
        </div>
        <div className="about-col"></div>
      </div>
    </section>
  );
};

export default About;