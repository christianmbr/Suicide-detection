import React from 'react';
import ReactDOM from 'react-dom/client';
import Prediction from './components/Prediction';
import Presentation from './components/Presentation';
import './components/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Presentation />
    <Prediction />
  </React.StrictMode>
);