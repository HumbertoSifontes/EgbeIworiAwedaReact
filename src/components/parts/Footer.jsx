import React from 'react';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';

const Footer = () => {
  return (
    <section className="section-padding footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-6 col-lg-4 redes">
            <div>
              <h3 className='footerTitles'>Redes Sociales</h3>
            </div>
            <div className="row sociales">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="facebook" id="facebook" />
              </a>
            </div>
            <div className="row sociales">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="instagram" id="instagram" />
              </a>
            </div>
            <div className="row sociales">
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="twitter" id="twitter" />
              </a>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-4 mapa">
            <div>
              <h3 className='footerTitles'>Ubicacion</h3>
            </div>
            <div className="mapouter">
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
                  title="mapa de ubicación">
                </iframe>
                <a href="https://online-timer.me/">Online Timer</a>
                <br />
                <a href="https://timenowin.net/">Time Now</a>
                <br />
                <a href="https://www.embedmaps.co">embed google maps api</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div>
              <h3 className='footerTitles'>Contacto</h3>
            </div>
            <div className="noPadding">
              <p><b>Email</b>: egbeiworiaweda@gmail.com</p>
              <p><b>Telefono</b>: 2483456</p>
              <p><b>Whatsapp</b>: 1109876543</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
