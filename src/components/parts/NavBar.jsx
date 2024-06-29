import React, { useRef } from 'react';
import simboloEgbe from '../images/simbolo-egbe.png';
import { Link, useLocation } from 'react-router-dom';
import DarkMode from '../../animations/DarkMode';

// Componente de barra de navegación del sitio web
function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navbarCollapseRef = useRef(null);

  // Función para obtener la clase de enlace de navegación activa
  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  // Función para manejar el clic en los enlaces de navegación
  const handleNavLinkClick = () => {
    const collapseElement = navbarCollapseRef.current;
    if (collapseElement && window.getComputedStyle(collapseElement).display === 'block') {
      collapseElement.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" aria-label="Navegación principal">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
          <img
            src={simboloEgbe}
            alt="Logo"
            width={30}
            height={24}
            className="d-inline-block align-text-left logo"
            loading="lazy" // Lazy loading para la imagen del logo
          />
          <span className='textoNav'>Egbe Iwori Aweda</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Alternar navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navbarCollapseRef}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={getNavLinkClass('/')} to="/" onClick={handleNavLinkClick}>Inicio</Link>
            </li>
            <li className="nav-item">
              {isHomePage ? (
                <a className="nav-link" href="#nosotros" onClick={handleNavLinkClick}>Nosotros</a>
              ) : (
                <Link className={getNavLinkClass('/nosotros')} to="/nosotros" onClick={handleNavLinkClick}>Nosotros</Link>
              )}
            </li>
            <li className="nav-item">
              {isHomePage ? (
                <a className="nav-link" href="#servicios" onClick={handleNavLinkClick}>Servicios</a>
              ) : (
                <Link className={getNavLinkClass('/servicios')} to="/servicios" onClick={handleNavLinkClick}>Servicios</Link>
              )}
            </li>
            <li className="nav-item">
              {isHomePage ? (
                <a className="nav-link" href="#logro" onClick={handleNavLinkClick}>Avance</a>
              ) : (
                <Link className={getNavLinkClass('/avance')} to="/avance" onClick={handleNavLinkClick}>Avance</Link>
              )}
            </li>
            <li className="nav-item">
              {isHomePage ? (
                <a className="nav-link" href="#concilio" onClick={handleNavLinkClick}>Concilio</a>
              ) : (
                <Link className={getNavLinkClass('/concilio')} to="/concilio" onClick={handleNavLinkClick}>Concilio</Link>
              )}
            </li>
            <li className="nav-item">
              {isHomePage ? (
                <a className="nav-link cta" href="#contact" onClick={handleNavLinkClick}>Contáctanos</a>
              ) : (
                <Link className={getNavLinkClass('/contact')} to="/contact" onClick={handleNavLinkClick}>Contáctanos</Link>
              )}
            </li>
            <li className="nav-item">
              <Link className={getNavLinkClass('/login')} to="/login" onClick={handleNavLinkClick}>Ingresa</Link>
            </li>
            <li className="nav-item">
              <DarkMode />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
