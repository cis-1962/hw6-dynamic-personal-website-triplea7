import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import App from './app';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
