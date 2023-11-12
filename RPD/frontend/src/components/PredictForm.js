// src/components/PredictForm.js
import React, { useState } from 'react';

function PredictForm() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePredict = async () => {
    // Check if no file is chosen
    if (!file) {
      setError('Please choose an image file before predicting.');
      return;
    }

    // Clear previous error
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        setResult(null); // Clear previous result
        setError('Prediction failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handlePredict}>Predict</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div>
          <p>Class: {result.class}</p>
          <p>Confidence: {result.confidence}</p>
        </div>
      )}
    </div>
  );
}

export default PredictForm;
