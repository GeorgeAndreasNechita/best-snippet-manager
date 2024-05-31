import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Snippet } from '../main/interfaces';

function Hello() {
  const [snippetsArray, setSnippetsArray] = useState([]);

  useEffect(() => {
    console.log('Component has been mounted!', window.myAPI());

    window.electronAPI.altOPressed((snippets) => {
      setSnippetsArray(snippets);
      console.log(snippetsArray);
    });
  }, []); // Empty dependency array ensures this only runs on mount

  return (
    <div>
      {snippetsArray.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
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
