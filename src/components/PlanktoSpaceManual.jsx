import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/PlanktoSpaceManual.css'; 

const PlanktoSpaceManual = () => {
    const navigate = useNavigate(); 

    const [detailsIndex, setDetailsIndex] = useState(0);
    const [saveIndex, setSaveIndex] = useState(0);
    const [helpIndex, setHelpIndex] = useState(0);

    useEffect(() => {
        const detailsTimer = setInterval(() => setDetailsIndex(prev => (prev + 1) % 3), 4000);
        const saveTimer = setInterval(() => setSaveIndex(prev => (prev + 1) % 3), 3500);
        const helpTimer = setInterval(() => setHelpIndex(prev => (prev + 1) % 2), 5000);

        return () => {
            clearInterval(detailsTimer);
            clearInterval(saveTimer);
            clearInterval(helpTimer);
        };
    }, []);

    return (
        <div className="manual-page-wrapper">
            <div className="manual-container">
                
                {/* BACK TO MAIN WEBSITE BUTTON */}
                <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'flex-start' }}>
                    <button 
                        onClick={() => navigate('/')} 
                        style={{
                            display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'transparent',
                            color: 'var(--teal, #2dd4bf)', border: '2px solid var(--teal, #2dd4bf)',
                            padding: '10px 20px', borderRadius: '8px', cursor: 'pointer',
                            fontWeight: 'bold', fontSize: '16px', transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--teal, #2dd4bf)'; e.currentTarget.style.color = '#000d1a'; }}
                        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--teal, #2dd4bf)'; }}
                    >
                        <i className="fa-solid fa-arrow-left"></i> Back to Main Website
                    </button>
                </div>

                <header className="manual-header">
                    <span className="version-badge">VERSION 1.0</span>
                    <h1>PlanktoSpace:<br />Comprehensive User Manual</h1>
                    <p style={{ color: 'var(--text-muted)', marginTop: '15px' }}>Last Updated: February 2026</p>
                    
                    {/* THIS IS THE BUTTON TO GO TO THE IN-DEPTH HTML PAGE */}
                    <div style={{ marginTop: '40px' }}>
                        <a href="planktospace-indepth.html" className="sophisticated-btn">
                            Access In-Depth Technical Manual <i className="fa-solid fa-book" style={{marginLeft: '8px'}}></i>
                        </a>
                    </div>
                </header>

                <section className="dev-note">
                    <h2>📢 A Note from the Developers</h2>
                    <p>We build this tool specifically for the scientific community.</p>
                </section>

                <div className="manual-section">
                    <div className="text-content">
                        <h2>1. The Home Screen</h2>
                        <p>This is your command center.</p>
                    </div>
                    <div className="phone-frame">
                        <div className="phone-screen">
                            <img src="/photos/home.jpg" className="fade-img active" alt="Home Screen" />
                        </div>
                    </div>
                </div>

                <div className="manual-section">
                    <div className="text-content">
                        <h2>2. The Map & Layer Control</h2>
                        <p>The map is where every search begins.</p>
                    </div>
                    <div className="phone-frame">
                        <div className="phone-screen">
                            <img src="/photos/map.jpg" className="fade-img active" alt="Map View" />
                        </div>
                    </div>
                </div>

                <div className="manual-section">
                    <div className="text-content">
                        <h2>5. Pass Details & External Validation</h2>
                        <p>Tap any item in the list to open the Detail View.</p>
                    </div>
                    <div className="phone-frame">
                        <div className="phone-screen">
                            <div className="scroll-container" style={{ transform: `translateY(-${(detailsIndex * 100) / 3}%)` }}>
                                <img src="/photos/detail1.jpg" alt="Step 1" />
                                <img src="/photos/detail2.jpg" alt="Step 2" />
                                <img src="/photos/detail3.jpg" alt="Step 3" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="manual-section">
                    <div className="text-content">
                        <h2>6. Saving & Exporting Data (JSON)</h2>
                        <p>Build a library of opportunities for offline use.</p>
                    </div>
                    <div className="phone-frame">
                        <div className="phone-screen">
                            <img src="/photos/save1.jpg" className={`fade-img ${saveIndex === 0 ? 'active' : 'hidden'}`} alt="Save 1" />
                            <img src="/photos/save2.jpg" className={`fade-img ${saveIndex === 1 ? 'active' : 'hidden'}`} alt="Save 2" />
                            <img src="/photos/save3.jpg" className={`fade-img ${saveIndex === 2 ? 'active' : 'hidden'}`} alt="Save 3" />
                        </div>
                    </div>
                </div>
                
                <div className="manual-section" style={{ marginBottom: 0, borderBottom: 'none' }}>
                    <div className="text-content">
                        <h2>7. Troubleshooting & System Info</h2>
                        <p>Go to <strong>"Help & About"</strong> to find your version numbers.</p>
                    </div>
                    <div className="phone-frame">
                        <div className="phone-screen">
                            <div className="scroll-container" style={{ transform: `translateY(-${(helpIndex * 100) / 2}%)` }}>
                                <img src="/photos/help1.jpg" alt="Help 1" />
                                <img src="/photos/help2.jpg" alt="Help 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanktoSpaceManual;