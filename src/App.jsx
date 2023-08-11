import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/parts/NavBar'
import Footer from './components/parts/Footer'
import Avance from './components/pages/Avance'
import Inicio from './components/pages/Inicio'
import Nosotros from './components/pages/Nosotros'
import Desempeño from './components/pages/Desempeño'
import Concilio from './components/pages/Concilio'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/desempeño' element={<Desempeño/>}/>
          <Route path='/avance' element={<Avance/>}/>
          <Route path='/concilio' element={<Concilio/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
