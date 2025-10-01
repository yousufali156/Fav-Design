// Ignore specific Chrome extension runtime error
const originalConsoleError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes(
      "Unchecked runtime.lastError: The message port closed before a response was received."
    )
  ) {
    return; // ignore this error
  }
  originalConsoleError(...args);
};

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
