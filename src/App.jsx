import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

import PlanktoSpaceManual from './components/PlanktoSpaceManual'; 

import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/planktospace-manual" element={<PlanktoSpaceManual />} />
    </Routes>
  );
}

export default App;