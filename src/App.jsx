import React from 'react';
import WaveCanvas from './WaveCanvas';
import './index.css';

function App() {
  const handleInteractiveClick = (url) => {
    if (url) window.location.href = url;
  };

  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="top-nav">
        <div className="nav-container">
          <img src="/photos/soft_ocean_final.png" alt="Logo" className="nav-logo" />
          <a href="#home-page">Home</a>
          <a href="#about">About Us</a>
          <a href="#projects">Projects</a>
          <a href="#portfolio">Aims</a>
          <a href="#FOLLOW-ME">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home-page" style={{ position: 'relative' }}>
        <div className="banner-text">
          <h1>SoftOcean Ltd</h1>
        </div>
        <div className="banner-logo">
          <img src="/photos/soft_ocean_final.png" alt="logo" />
        </div>
        <WaveCanvas />
      </section>

      {/* About Section */}
      <section id="about">
        <div className="title-text">
          <p>Currently</p>
          <h5>What we do</h5>
        </div>
        <div className="about-row">
          <div className="about-col">
            <p>As an Information technology consultancy company, we provide expert advice and strategic guidance...</p>
          </div>
          <div className="about-col">
            <p>Additionally, we do Specialised design activities...</p>
          </div>
          <div className="about-col"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">Past achievements</h2>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-item">
              <img src="/photos/Screenshot 2024-05-29 124455.png" alt="Project 1" className="project-img" />
              <div className="project-info">
                <h3>EMI Creation</h3>
                <p>Creation of a portable electromagnetic induction (EMI) instrument...</p>
                <a href="#project1-gallery" className="project-link">See gallery</a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project-item">
              <img src="/photos/ToneKP_2_1_zoom.png" alt="Project 2" className="project-img" />
              <div className="project-info">
                <h3>Sylt Data Analysis</h3>
                <p>Examination of electromagnetic signals...</p>
                <a href="#project2-gallery" className="project-link">See gallery</a>
              </div>
            </div>
            {/* Project 3 */}
            <div className="project-item">
              <img src="/photos/2024-05-13_19-33.png" alt="Project 3" className="project-img" />
              <div className="project-info">
                <h3>Geophysical surveys</h3>
                <p>Understand geological properties...</p>
                <a href="#project3-gallery" className="project-link">See gallery</a>
              </div>
            </div>
            {/* PlanktoSpace */}
            <div className="project-item">
              <img src="/photos/imagefiller2.png" alt="PlanktoSpace" className="project-img" />
              <div className="project-info">
                <h3>PlanktoSpace App</h3>
                <p>Innovative mobile application...</p>
                <a href="#planktospace-gallery" className="project-link">See gallery</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 3 Gallery (Interactive) */}
      <section id="project3-gallery" className="gallery-section">
        <div className="gallery-container">
          <h2>Geophysical surveys</h2>
          <div className="gallery-grid">
            <div className="gallery-item" onClick={() => handleInteractiveClick('/GeomaresSylt.html')}>
              <img src="/photos/2024-05-13_19-35.png" alt="Interactive 1" />
              <p className="image-caption">Click image to interact</p>
            </div>
            <div className="gallery-item" onClick={() => handleInteractiveClick('/vis_path_amp.html')}>
              <img src="/photos/2024-05-13_19-36.png" alt="Interactive 2" />
              <p className="image-caption">Click image to interact</p>
            </div>
          </div>
        </div>
      </section>

      {/* PlanktoSpace Detail Section */}
      <section id="planktospace-gallery" className="gallery-section">
        <div className="gallery-container">
          <h2>PlanktoSpace App</h2>
          <div className="app-split-container">
            <div className="app-split-image">
              <img src="/photos/imagefiller2.png" alt="Display" />
            </div>
            <div className="app-split-info">
              <p>PlanktoSpace is our flagship mobile solution...</p>
              <div className="app-button-wrapper">
                <a href="/planktospace-legal.html" className="sophisticated-btn">View App Legal & Support Info</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aims Section */}
      <section id="portfolio">
        <div className="title-text">
            <p>Soft Ocean</p>
            <h1>Aims and Aspirations</h1>
        </div>
        <div className="portfolio-box">
            <div className="portfolio">
                <div className="portfolio-text">
                    <p>Our objective is to expand our comprehension, knowledge, and services...</p>
                </div>
            </div>
            <div className="portfolio-img">
                <img src="/photos/Untitled13_20240529131252 (1).png" alt="Aims" />
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#001936', textAlign: 'center', padding: '20px', borderTop: '1px solid #1c6f96' }}>
        <div className="nav-container" style={{ justifyContent: 'center', gap: '20px' }}>
          <a href="/website-privacy.html" style={{ color: '#666' }}>Website Privacy</a>
          <a href="/website-terms.html" style={{ color: '#666' }}>Website Terms</a>
          <a href="/company-info.html" style={{ color: '#666' }}>Company Info</a>
        </div>
        <p style={{ color: '#666', marginTop: '10px' }}>&copy; 2024 SoftOcean Ltd</p>
      </footer>
    </div>
  );
}

export default App;