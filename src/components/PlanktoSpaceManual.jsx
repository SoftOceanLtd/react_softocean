import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- 1. Imported useNavigate
import '../styles/PlanktoSpaceManual.css'; // Adjust path based on your folder structure

const PlanktoSpaceManual = () => {
    const navigate = useNavigate(); // <-- 2. Initialized navigate

    const [detailsIndex, setDetailsIndex] = useState(0);
    const [saveIndex, setSaveIndex] = useState(0);
    const [helpIndex, setHelpIndex] = useState(0);

    // Automation for the animated phone galleries
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
                
                {/* --- 3. NEW BACK BUTTON SECTION --- */}
                <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'flex-start' }}>
                    <button 
                        onClick={() => navigate('/')} 
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            backgroundColor: 'transparent',
                            color: 'var(--teal, #2dd4bf)',
                            border: '2px solid var(--teal, #2dd4bf)',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--teal, #2dd4bf)';
                            e.currentTarget.style.color = '#000d1a';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'var(--teal, #2dd4bf)';
                        }}
                    >
                        <i className="fa-solid fa-arrow-left"></i> Back to Main Website
                    </button>
                </div>
                {/* ---------------------------------- */}

                <header className="manual-header">
                    <span className="version-badge">VERSION 1.0</span>
                    <h1>PlanktoSpace:<br />Comprehensive User Manual</h1>
                    <p style={{ color: 'var(--text-muted)', marginTop: '15px' }}>Last Updated: February 2026</p>
                    <p style={{ maxWidth: '750px', margin: '20px auto 0 auto' }}>
                        Welcome to PlanktoSpace. This application is designed to be your primary decision-support tool for satellite-synchronized marine sampling.
                    </p>
                </header>

                <section className="dev-note">
                    <h2>📢 A Note from the Developers</h2>
                    <p>We build this tool specifically for the scientific community. To help us support you better, we have one small request:</p>
                    <blockquote>
                        <strong>Please send us a "Hello!"</strong><br />
                        When you first install the app, go to the <strong>Feedback & Support</strong> screen and send a short message with your <strong>Name</strong> and <strong>Institution</strong>. This helps us identify your anonymous Device ID in our system, allowing us to prioritize your feature requests and support tickets.
                    </blockquote>
                </section>

                {/* 1. The Home Screen */}
                <div className="manual-section">
                    <div className="text-content">
                        <h2>1. The Home Screen</h2>
                        <p>This is your command center.</p>
                        <ul>
                            <li><strong>Proceed to Map:</strong> Opens the main operational view.</li>
                            <li><strong>View Saved Passes:</strong> Access your offline library of selected opportunities.</li>
                            <li><strong>Feedback & Support:</strong> A direct chat line to the development team.
                                <br /><em>Note:</em> If you see a <strong>Red Dot</strong> on this button, it means the developers have replied to your previous message.
                            </li>
                            <li><strong>Help & About:</strong> Access user guides, legal terms, and system versioning.</li>
                        </ul>
                    </div>
                    <div className="phone-frame">
                        <div className="phone-screen">
                            <img src="/photos/home.jpg" className="fade-img active" alt="Home Screen" />
                        </div>
                    </div>
                </div>

                {/* 2. The Map & Layer Control */}
                <div className="manual-section">
                    <div className="text-content">
                        <h2>2. The Map & Layer Control</h2>
                        <p>The map is where every search begins. You can navigate using standard pinch-to-zoom gestures.</p>
                        <h3>Map Controls (Top Right)</h3>
                        <ul>
                            <li><strong>Layers (Stack Icon):</strong> Opens the Map Layers menu.
                                <ul>
                                    <li><em>Satellite:</em> Esri World Imagery.</li>
                                    <li><em>Ocean:</em> Esri Ocean Basemap.</li>
                                    <li><em>OpenSeaMap:</em> Toggles nautical navigation aids.</li>
                                    <li><em>No Map:</em> Select this to save data bandwidth at sea.</li>
                                </ul>
                            </li>
                            <li><strong>Refine Search (Edit Icon):</strong> Opens the detailed search settings.</li>
                            <li><strong>My Location (Target Icon):</strong> Snaps the crosshair to your vessel's current GPS position.</li>
                        </ul>
                        <h3>Selecting a Target</h3>
                        <p>Tap anywhere on the map to drop a <strong>Blue Pin</strong>. This is your "Sampling Station."</p>
                    </div>
                    <div className="phone-frame">
                        <div className="phone-screen">
                            <img src="/photos/map.jpg" className="fade-img active" alt="Map View" />
                        </div>
                    </div>
                </div>

                {/* 5. Pass Details & Validation (Scrolling translation) */}
                <div className="manual-section">
                    <div className="text-content">
                        <h2>5. Pass Details & External Validation</h2>
                        <p>Tap any item in the list to open the Detail View.</p>
                        <ul>
                            <li><strong>Timing:</strong> Shows Start, Max Elevation, and End times in <strong>UTC</strong> and <strong>Local Time</strong>.</li>
                            <li><strong>Weather Context:</strong> Cloud Sources and Marine data (Wave/Wind).</li>
                            <li><strong>External Links:</strong> Opens <strong>Windy.com</strong> or <strong>NASA Worldview</strong>.</li>
                        </ul>
                    </div>
                    <div className="phone-frame">
                        <div className="phone-screen">
                            {/* Dynamically scrolls based on index percentage */}
                            <div className="scroll-container" style={{ transform: `translateY(-${(detailsIndex * 100) / 3}%)` }}>
                                <img src="/photos/detail1.jpg" alt="Step 1" />
                                <img src="/photos/detail2.jpg" alt="Step 2" />
                                <img src="/photos/detail3.jpg" alt="Step 3" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 6. Saving & Exporting (Fading translation) */}
                <div className="manual-section">
                    <div className="text-content">
                        <h2>6. Saving & Exporting Data (JSON)</h2>
                        <p>Build a library of opportunities for offline use.</p>
                        <ol>
                            <li><strong>Save:</strong> Tap the <strong>Star Icon</strong> in the list or detail view.</li>
                            <li><strong>View:</strong> Go to <strong>"Saved Opportunities"</strong> from Home.</li>
                        </ol>
                    </div>
                    <div className="phone-frame">
                        <div className="phone-screen">
                            <img src="/photos/save1.jpg" className={`fade-img ${saveIndex === 0 ? 'active' : 'hidden'}`} alt="Save 1" />
                            <img src="/photos/save2.jpg" className={`fade-img ${saveIndex === 1 ? 'active' : 'hidden'}`} alt="Save 2" />
                            <img src="/photos/save3.jpg" className={`fade-img ${saveIndex === 2 ? 'active' : 'hidden'}`} alt="Save 3" />
                        </div>
                    </div>
                </div>
                
                {/* 7. Troubleshooting */}
                <div className="manual-section" style={{ marginBottom: 0, borderBottom: 'none' }}>
                    <div className="text-content">
                        <h2>7. Troubleshooting & System Info</h2>
                        <h3>Updates & Versioning</h3>
                        <p>Go to <strong>"Help & About"</strong> to find your version numbers.</p>
                        <ul>
                            <li><strong>App Version:</strong> Interface version.</li>
                            <li><strong>Server Version:</strong> Cloud calculation engine.</li>
                        </ul>
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