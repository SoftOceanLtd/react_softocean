import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import PortfolioAims from '../components/PortfolioAims';
import Footer from '../components/Footer';

const MainPage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <PortfolioAims />
      <Footer />
    </div>
  );
};

export default MainPage;