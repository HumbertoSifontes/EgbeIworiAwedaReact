import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/parts/NavBar';
import Footer from './components/parts/Footer';
import Avance from './components/pages/Avance';
import Inicio from './components/pages/Inicio';
import Nosotros from './components/pages/Nosotros';
import Desempeño from './components/pages/Desempeño';
import Concilio from './components/pages/Concilio';
import LogIn from './components/pages/LogIn';
import Registration from './components/pages/register';
import Contacto from './components/pages/Contacto';
import Fetivales from './components/parts/Fetivales';
import Transition from '../src/animations/transitions';

function AppContent() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <motion.div key={location.pathname}>
        <Transition>
          <Navbar /> 
          <main>
            <Routes location={location}>
              <Route path='/' element={<Inicio />} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/servicios' element={<Desempeño />} />
              <Route path='/avance/:albumId/:year' element={<Fetivales />} />
              <Route path='/avance/:albumId' element={<Fetivales />} />
              <Route path='/avance' element={<Avance />} />
              <Route path='/concilio' element={<Concilio />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/register' element={<Registration />} />
              <Route path='/contact' element={<Contacto />} />
            </Routes>
          </main>
          <Footer />
        </Transition>
      </motion.div>
    </AnimatePresence>
  );
}

export default AppContent;
