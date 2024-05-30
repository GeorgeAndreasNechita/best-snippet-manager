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

  const incrementCount = () => {
    setCount(count + 1); // Update count state by incrementing by 1
  };

  window.electronAPI.onUpdateCounter((value) => {
    setCount(count + value)
  })

  return (
    <div>
      <h1>electron-react-boilerplate</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
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
