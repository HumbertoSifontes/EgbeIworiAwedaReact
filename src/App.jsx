// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/scroll-to-top';
import AppContent from './AppContent';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
