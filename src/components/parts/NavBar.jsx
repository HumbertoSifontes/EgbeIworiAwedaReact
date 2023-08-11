import React from 'react';
import simboloEgbe from '../images/simbolo-egbe.png';
import { Link } from 'react-router-dom';


function Navbar() {
    return ( 
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img 
                    src={simboloEgbe} 
                    alt={'Logo'} 
                    width={30} height={24} 
                    className={'d-inline-block align-text-left logo'}
              /><span>Egbe Iwori Aweda</span>
          </Link>
		      <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Ingresa
                </a>
                <ul class="dropdown-menu">
                  <li><input type="email" class="dropdown-item"/>Correo</li>
                  <li>
                    <hr class="dropdown-divider"/>
                  </li>
                  <li><input type="password" class="dropdown-item"/>Contraseña</li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#nosotros">Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#servicios">Servicios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#logro">Avance</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#concilio">Concilio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contactanos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     );
}

export default Navbar;