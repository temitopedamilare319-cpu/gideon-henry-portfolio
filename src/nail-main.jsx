import React from 'react';
import { createRoot } from 'react-dom/client';
import NailStudio from './NailStudio.jsx';
import './nail.css';

createRoot(document.getElementById('nail-root')).render(
  <React.StrictMode>
    <NailStudio />
  </React.StrictMode>,
);
