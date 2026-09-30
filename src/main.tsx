import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
// After, not instead: motion.css decorates the geometry in index.css and wins
// on equal specificity, so it has to come second.
import './motion.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
