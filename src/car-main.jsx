import React from 'react';
import { createRoot } from 'react-dom/client';
import CarExperience from './CarExperience.jsx';
import './car.css';

createRoot(document.getElementById('aeron-root')).render(
  <React.StrictMode>
    <CarExperience />
  </React.StrictMode>,
);
