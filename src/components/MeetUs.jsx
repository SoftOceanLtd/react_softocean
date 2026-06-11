import React from 'react';
import '../styles/MeetUs.css';

const MeetUs = () => {
  return (
    <section id="meet-us">
      <div className="container meetus-container">

        <div className="title-text" style={{ marginBottom: '50px' }}>
          <p>Behind the Tech</p>
          <h2>A Family-Run Enterprise</h2>
        </div>

        <div className="meetus-split">
          <div className="meetus-content">
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
              At SoftOcean, we combine the cutting-edge expertise of a top-tier tech consultancy with the heart and dedication of a family business. We don't just write code; we build lasting legacies.
            </p>

            <div className="meetus-cards">
              <div className="meetus-card">
                <h3><i className="fa-solid fa-seedling"></i> Our Heritage</h3>
                <p>Built on strong family values, we bring a deeply personal level of dedication to every project, ensuring your success is treated as our own.</p>
              </div>

              <div className="meetus-card">
                <h3><i className="fa-solid fa-handshake"></i> The Advantage</h3>
                <p>No corporate red tape. Just direct communication, honest feedback, and agile problem-solving from people who truly care about the outcome.</p>
              </div>

              <div className="meetus-card">
                <h3><i className="fa-solid fa-users"></i> Your Extended Team</h3>
                <p>We don't just take on clients; we build long-term partnerships. When you work with us, you become an extension of our family.</p>
              </div>
            </div>
          </div>

          <div className="meetus-visual">
            <div className="meetus-image-wrapper">
              <img src="photos/Untitled13_20240529131252 (1).png" alt="SoftOcean Team" />
              <div className="meetus-image-overlay"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MeetUs;
