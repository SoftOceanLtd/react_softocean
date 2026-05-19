import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import '../styles/Projects.css';

const Projects = () => {
  const navigate = useNavigate(); // 2. Initialize the navigate function

  // This is still used for your static external HTML maps
  const handleInteractiveClick = (url) => {
    window.location.href = url;
  };

  return (
    <section id="projects">
      {/* 1. Singular Boxes */}
      <div className="container">
        <div className="title-text center-title">
          <p>Our Portfolio</p>
          <h2>Notable Projects & Core Solutions</h2>
        </div>

        <div className="projects-grid">
          {[
            { img: 'photos/Screenshot 2024-05-29 124455.png', title: 'EMI Creation', desc: 'Portable electromagnetic induction instrument.', link: '#project1-gallery' },
            { img: 'photos/ToneKP_2_1_zoom.png', title: 'Sylt Data Analysis', desc: 'Examination of electromagnetic signals for cable integrity.', link: '#project2-gallery' },
            { img: 'photos/2024-05-13_19-33.png', title: 'Geophysical Surveys', desc: 'Understanding geological properties without invasive digging.', link: '#project3-gallery' },
            { img: 'photos/imagefiller2.png', title: 'PlanktoSpace App', desc: 'Innovative mobile application for satellite overpass tracking.', link: '#planktospace-showcase' }
          ].map((proj, idx) => (
            <div className="project-card" key={idx}>
              <img src={proj.img} alt={proj.title} className="project-img" />
              <div className="project-content">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <a href={proj.link} className="project-link">View Details <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Interactive Gallery Section */}
      <div id="project3-gallery" className="container split-section">
        <div className="split-text">
          <h2 className="text-gradient">Interactive Surveys</h2>
          <p>Click on the maps to access our interactive data visualization portals for Geophysical surveying.</p>
        </div>
        <div className="interactive-grid">
          <div className="interactive-item" onClick={() => handleInteractiveClick('GeomaresSylt.html')}>
            <img src="photos/2024-05-13_19-35.png" alt="Survey 1" />
            <div className="hover-indicator">Interact</div>
          </div>
          <div className="interactive-item" onClick={() => handleInteractiveClick('vis_path_amp.html')}>
            <img src="photos/2024-05-13_19-36.png" alt="Survey 2" />
            <div className="hover-indicator">Interact</div>
          </div>
        </div>
      </div>

      {/* 3. NEW LARGER PRESENTATION: PlanktoSpace Flagship Showcase */}
      <div id="planktospace-showcase" className="container flagship-showcase">
        <div className="flagship-header">
          <span className="highlight-badge">Flagship Innovation</span>
          <h2>The PlanktoSpace App</h2>
        </div>

        <div className="split-section reverse flagship-body">
          <div className="split-image flagship-image">
            <div className="glow-backdrop"></div>
            <img src="photos/imagefiller2.png" alt="PlanktoSpace App Display" />
          </div>
          <div className="split-text flagship-text">
            <h3>Transforming Satellite Overpass Tracking</h3>
            <p>
              Representing one of our most significant technological milestones, the PlanktoSpace App is a premier mobile solution designed for researchers and enthusiasts. It delivers high-precision tracking and real-time analytics directly to your device.
            </p>
            
            <ul className="flagship-features">
              <li><i className="fa-solid fa-satellite"></i> Real-time satellite trajectory tracking</li>
              <li><i className="fa-solid fa-chart-pie"></i> Advanced, on-the-go data analytics</li>
              <li><i className="fa-solid fa-mobile-screen-button"></i> Seamless, intuitive mobile interface</li>
            </ul>

            <div className="flagship-actions">
              
              {/* 3. FIXED BUTTON: Using React Router's `navigate` instead of `window.location.href` */}
              <button className="modern-btn" onClick={() => navigate('/planktospace-manual')}>
                View User Manual
              </button>
              
              <a href="planktospace-legal.html" className="modern-btn outline-btn">App Support & Legal</a>
              <button className="modern-btn outline-btn" onClick={() => handleInteractiveClick('#')}>Download App</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;