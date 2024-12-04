import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('');
  type adviceType = {
    id:number,
    advice:string
  }

  const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json()
    console.log(data)
    setAdvice(data.slip.advice)
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <h1>Advice Generator</h1>
      
      <div className="advice-box">
      <h2>{advice}</h2>
      </div>
      <button onClick={fetchAdvice} className="advice-button">Generate Advice</button>
    </div>
  );
};

export default App;