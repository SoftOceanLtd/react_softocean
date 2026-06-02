import React from 'react';
import '../styles/Projects.css';

const Projects = () => {

  // Safely redirect to external/static HTML files outside of React Router
  const handleExternalHTML = (file) => {
    window.location.href = file; 
  };

  // Carousel scroll handler
  const scrollCarousel = (direction) => {
    const track = document.getElementById('carousel-track');
    if (track) {
      const scrollAmount = window.innerWidth > 768 ? 350 : 280;
      track.scrollBy({ left: direction === 'next' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects">
      
      {/* 1. PlanktoSpace Flagship Showcase */}
      <div id="planktospace-showcase" className="container flagship-showcase">
        <div className="flagship-header">
          <span className="highlight-badge">Innovation</span>
          <h2>The PlanktoSpace App</h2>
        </div>

        <div className="split-section reverse flagship-body">
          <div className="split-image flagship-image">
            <div className="glow-backdrop"></div>
            <img src="photos/welcome-screen.png" alt="PlanktoSpace App Display" />
          </div>
          <div className="split-text flagship-text">
            <h3>Transforming Satellite Overpass Tracking</h3>
            <p>
              Representing one of our most significant technological milestones, the PlanktoSpace App is a premier mobile solution designed for researchers and enthusiasts.
            </p>
            
            <ul className="flagship-features">
              <li><i className="fa-solid fa-satellite"></i> Real-time satellite trajectory tracking</li>
              <li><i className="fa-solid fa-chart-pie"></i> Advanced, on-the-go data analytics</li>
              <li><i className="fa-solid fa-mobile-screen-button"></i> Seamless, intuitive mobile interface</li>
            </ul>

            <div className="flagship-actions">
              
              <button className="modern-btn" onClick={() => handleExternalHTML('planktospace-indepth.html')}>
                View User Manual
              </button>
              
              <button className="modern-btn outline-btn" onClick={() => handleExternalHTML('planktospace-legal.html')}>App Support & Legal</button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Gallery Section */}
      <div id="project3-gallery" className="container split-section">
        <div className="split-text">
          <h2 className="text-gradient">Interactive Surveys</h2>
          <p>Click on the maps to access our interactive data visualization portals for Geophysical surveying.</p>
        </div>
        <div className="interactive-grid">
          <div className="interactive-item" onClick={() => handleExternalHTML('GeomaresSylt.html')}>
            <img src="photos/2024-05-13_19-35.png" alt="Survey 1" />
            <div className="hover-indicator">Interact</div>
          </div>
          <div className="interactive-item" onClick={() => handleExternalHTML('vis_path_amp.html')}>
            <img src="photos/2024-05-13_19-36.png" alt="Survey 2" />
            <div className="hover-indicator">Interact</div>
          </div>
        </div>
      </div>

      {/* 3. Carousel Projects Section */}
      {/* Note: Added a margin-top here so it isn't squeezed against the gallery above it */}
      <div className="container" style={{ marginTop: '120px' }}>
        <div className="title-text center-title">
          <p>Our Portfolio</p>
          <h2>Notable Projects & Core Solutions</h2>
        </div>

        <div className="carousel-wrapper">
          <button className="carousel-btn prev" onClick={() => scrollCarousel('prev')}>&#10094;</button>
          
          <div className="carousel-track" id="carousel-track">
            {[
              { img: 'photos/Screenshot 2024-05-29 124455.png', title: 'EMI Creation', desc: 'Portable electromagnetic induction instrument.' },
              { img: 'photos/ToneKP_2_1_zoom.png', title: 'Sylt Data Analysis', desc: 'Examination of electromagnetic signals for cable integrity.' },
              { img: 'photos/2024-05-13_19-33.png', title: 'Geophysical Surveys', desc: 'Understanding geological properties without invasive digging.' },
              { img: 'photos/welcome-screen.png', title: 'PlanktoSpace App', desc: 'Innovative mobile application for satellite overpass tracking.' }
            ].map((proj, idx) => (
              <div className="project-card" key={idx}>
                <img src={proj.img} alt={proj.title} className="project-img" />
                <div className="project-content">
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={() => scrollCarousel('next')}>&#10095;</button>
        </div>
      </div>
      
    </section>
  );
};

export default Projects;