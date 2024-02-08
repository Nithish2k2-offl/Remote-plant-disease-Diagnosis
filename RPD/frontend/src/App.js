// src/App.js
import React from 'react';
import './App.css';
import PredictForm from './components/PredictForm';

function App() {
  return (
    <div className="App">
      <h1 id="title" >REMOTE PLANT DISEASE DIAGNOSIS</h1>
      <br></br>
      <PredictForm />
    </div>
  );
}

export default App;
