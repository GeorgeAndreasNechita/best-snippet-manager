import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import React, { useEffect } from 'react';


function Hello() {
  useEffect(() => {
    console.log('Component has been mounted!');
  }, []); // Empty dependency array ensures this only runs on mount

  return (
    <div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        Andreas
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
