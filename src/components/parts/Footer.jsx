import React from 'react';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';

// Componente de pie de página del sitio web
const Footer = () => {
  return (
    <footer className="section-padding footer" id="footer" aria-labelledby="footer-heading">
      <div className="container">
        <div className="row">
          {/* Sección de redes sociales */}
          <div className="col-6 col-md-6 col-lg-4 redes">
            <div>
              <h3 className='footerTitles' id="footer-heading">Redes Sociales</h3>
            </div>
            <div className="row sociales">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={facebook} alt="Facebook" id="facebook" loading="lazy" />
              </a>
            </div>
            <div className="row sociales">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagram} alt="Instagram" id="instagram" loading="lazy" />
              </a>
            </div>
            <div className="row sociales">
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src={twitter} alt="Twitter" id="twitter" loading="lazy" />
              </a>
            </div>
          </div>
          
          {/* Sección de ubicación */}
          <div className="col-6 col-md-6 col-lg-4 mapa">
            <div>
              <h3 className='footerTitles'>Ubicación</h3>
            </div>
            <div className="mapouter" aria-labelledby="ubicacion-heading">
              <div className="gmap_canvas">
                <iframe
                  className="container-fluid"
                  width="122"
                  height="97"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=10%C2%B003%2706.9%22N+65%C2%B002%2703.3%22W&t=&z=18&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title="Mapa de ubicación">
                </iframe>
              </div>
            </div>
          </div>
          
          {/* Sección de contacto */}
          <div className="col-12 col-md-12 col-lg-4">
            <div>
              <h3 className='footerTitles'>Contacto</h3>
            </div>
            <div className="noPadding">
              <p><b>Email</b>: egbeiworiaweda@gmail.com</p>
              <p><b>Teléfono</b>: 2483456</p>
              <p><b>Whatsapp</b>: 1109876543</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
