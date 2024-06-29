import React from 'react';
import festivales from '../images/festivales.jpg';
import locacion from '../images/locacion.jpg';
import consagraciones from '../images/consagraciones.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/variants';

const Achieves = () => {
  return (
    <section className="logro section-padding" id="logro">
      <div className="container miniSectionServices">
        {/* Sección de encabezado */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <motion.div 
                variants={fadeIn('right', 0.2)} 
                initial="hidden" 
                whileInView="show" 
                exit="hidden"  
                viewport={{ once: true }} 
                layoutScroll
              >
                <h2 className="pb-5">Avance</h2>
              </motion.div>
              <motion.div 
                variants={fadeIn('left', 0.2)} 
                initial="hidden" 
                whileInView="show" 
                exit="hidden"  
                viewport={{ once: true }} 
                layoutScroll
              >
                <p>
                  El Egbe Iwori Aweda se ha destacado por su compromiso con las 
                  tradiciones de Ifá y Orisa, logrando avances significativos y 
                  convirtiéndose en un pilar de la espiritualidad Yoruba. Desde 
                  la creación de su propio templo hasta la realización de diversas 
                  ceremonias y festivales, han demostrado devoción y espíritu 
                  comunitario. Conoce más sobre la evolución y logros de nuestro 
                  templo a lo largo de los años.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Sección de tarjetas de logros */}
        <div className="row gy-3">
          <motion.div 
            className="col-12 col-md-12 col-lg-4" 
            variants={fadeIn('right', 0.2)} 
            initial="hidden" 
            whileInView="show" 
            exit="hidden"  
            viewport={{ once: true }} 
            layoutScroll
          >
            <div className="card text-light text-center pb-2 intentoCard2">
              <div className="card-body text-dark d-flex flex-column justify-content-between align-items-center">
                <div className="row align-items-center">
                  <div className="img-area mb-4">
                    <img alt="Locacion" className="card-img-top img-fluid" src={locacion} loading="lazy" />
                  </div>
                  <h3 className="card-title">Locación</h3>
                  <p className="lead">
                    El templo ha permanecido en un par de lugares a lo largo de los años,
                    contando hoy con su propia locación. Egbe propio donde hay Orisa consagrados.
                  </p>
                </div>
                <div className="row">
                  <Link className="btn btn-success text-white" to="/avance">Conoce más</Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="col-12 col-md-12 col-lg-4" 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            whileInView="show" 
            exit="hidden"  
            viewport={{ once: true }} 
            layoutScroll
          >
            <div className="card text-light text-center pb-2 intentoCard2">
              <div className="card-body text-dark d-flex flex-column justify-content-between align-items-center">
                <div className="row align-items-center">
                  <div className="img-area mb-4">
                    <img alt="Consagraciones" className="card-img-top img-fluid" src={consagraciones} loading="lazy" />
                  </div>
                  <h3 className="card-title">Ceremonias</h3>
                  <p className="lead">
                    En el templo hemos realizado todo tipo de consagraciones tanto en 
                    Venezuela como en África. Consagraciones desde Isefa hasta Ogboni.
                  </p>
                </div>
                <div className="row">
                  <Link className="btn btn-success text-white" to="/avance">Conoce más</Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="col-12 col-md-12 col-lg-4" 
            variants={fadeIn('left', 0.2)} 
            initial="hidden" 
            whileInView="show" 
            exit="hidden"  
            viewport={{ once: true }} 
            layoutScroll
          >
            <div className="card text-light text-center pb-2 intentoCard2">
              <div className="card-body text-dark d-flex flex-column justify-content-between align-items-center">
                <div className="row align-items-center">
                  <div className="img-area mb-4">
                    <img alt="Festivales" className="card-img-top img-fluid" src={festivales} loading="lazy" />
                  </div>
                  <h3 className="card-title">Festivales</h3>
                  <p className="lead">
                    El templo desde hace 8 años organiza consecutivamente varios festivales a
                    diferentes deidades con la participación de todos los integrantes.
                  </p>
                </div>
                <div className="row">
                  <Link className="btn btn-success text-white" to="/avance">Conoce más</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Achieves;
