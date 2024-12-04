import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    const response = await axios.get('https://api.adviceslip.com/advice');
    setAdvice(response.data.slip.advice);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <h1>Advice Generator</h1>
      <div className="advice-box">
        <p>{advice}</p>
      </div>
      <button onClick={fetchAdvice} className="advice-button">Generate Advice</button>
    </div>
  );
};

export default App;