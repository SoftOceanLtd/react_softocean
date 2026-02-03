import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const handleInteractiveClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <section id="projects">
        <div className="container">
          <h2 className="section-title">Past achievements</h2>
          <div className="projects-grid">
            <div className="project-item">
              <img src="photos/Screenshot 2024-05-29 124455.png" alt="EMI" className="project-img" />
              <div className="project-info">
                <h3>EMI Creation</h3>
                <p>Creation of a portable electromagnetic induction instrument.</p>
                <a href="#project1-gallery" className="project-link">See gallery</a>
              </div>
            </div>
            <div className="project-item">
              <img src="photos/ToneKP_2_1_zoom.png" alt="Sylt" className="project-img" />
              <div className="project-info">
                <h3>Sylt Data Analysis</h3>
                <p>Examination of electromagnetic signals for cable integrity.</p>
                <a href="#project2-gallery" className="project-link">See gallery</a>
              </div>
            </div>
            <div className="project-item">
              <img src="photos/2024-05-13_19-33.png" alt="Geophysical" className="project-img" />
              <div className="project-info">
                <h3>Geophysical surveys</h3>
                <p>Understanding geological properties without invasive digging.</p>
                <a href="#project3-gallery" className="project-link">See gallery</a>
              </div>
            </div>
            <div className="project-item">
              <img src="photos/imagefiller2.png" alt="App" className="project-img" />
              <div className="project-info">
                <h3>PlanktoSpace App</h3>
                <p>An innovative mobile application for satellite overpass tracking.</p>
                <a href="#planktospace-gallery" className="project-link">See gallery</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section id="project3-gallery" className="gallery-section">
        <div className="gallery-container">
          <h2>Geophysical surveys</h2>
          <div className="gallery-grid">
            <div className="gallery-item" onClick={() => handleInteractiveClick('GeomaresSylt.html')}>
              <img src="photos/2024-05-13_19-35.png" alt="Survey 1" />
              <p className="image-caption">Click image to interact</p>
            </div>
            <div className="gallery-item" onClick={() => handleInteractiveClick('vis_path_amp.html')}>
              <img src="photos/2024-05-13_19-36.png" alt="Survey 2" />
              <p className="image-caption">Click image to interact</p>
            </div>
          </div>
        </div>
      </section>

      {/* PlanktoSpace Detail */}
      <section id="planktospace-gallery" className="gallery-section">
        <div className="gallery-container">
          <h2>PlanktoSpace App</h2>
          <div className="app-split-container">
            <div className="app-split-image">
              <img src="photos/imagefiller2.png" alt="App Display" />
            </div>
            <div className="app-split-info">
              <p>PlanktoSpace is our flagship mobile solution for researchers and enthusiasts.</p>
              <div className="app-button-wrapper">
                <a href="planktospace-legal.html" className="sophisticated-btn">View App Legal & Support Info</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;