import './index.css';
import { createRoot } from 'react-dom/client'; // Fix 1: Use named import (curly braces)
import { StrictMode } from 'react';            // Fix 2: Import StrictMode
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);