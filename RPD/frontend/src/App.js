// src/App.js
import React from 'react';
import './App.css';
import PredictForm from './components/PredictForm';

function App() {
  return (
    <div className="App">
      <h1 >Plant Disease Diagnosis</h1>
      <PredictForm/>
    </div>
  );
}

export default App;
