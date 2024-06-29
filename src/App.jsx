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
        <ScrollToTop /> {/* Componente para desplazar hacia arriba al cambiar de ruta */}
        <AppContent /> {/* Contenido principal de la aplicación, se hizo asi porque no permitia usar useLocation fuera del contexto del Router */}
      </Router>
    </div>
  );
}

export default App;
