import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactLenis } from 'lenis/react';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactLenis root options={{ duration: 1.05, smoothWheel: true }}>
      <App />
    </ReactLenis>
  </React.StrictMode>
);
