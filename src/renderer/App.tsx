import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function Hello() {
  useEffect(() => {
    console.log('Component has been mounted!');
    console.log(window.myAPI());
  }, []); // Empty dependency array ensures this only runs on mount
  const [count, setCount] = useState(0); // Initialize count state to 0


  window.electronAPI.onUpdateCounter((snippets) => {
    console.log(snippets);
  })

  return (
    <div>
      <h1>electron-react-boilerplate</h1>
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
