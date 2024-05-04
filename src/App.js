import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const go = async () => {
      const response = await fetch('https://3.148.144.236/api/test')
      const data = await response.json()
      setMessage(data)
    }
    go().catch(alert)
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;