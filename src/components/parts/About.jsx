import React from 'react';
import sobre from '../images/sobre.jpg';
import { Link } from 'react-router-dom';
import { fadeIn } from '../../animations/variants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section-padding" id="nosotros">
      <div className="container miniSectionServices">
        {/* Título de la sección */}
        <div className="row pb-5">
          <motion.div 
            className="col-md-12" 
            variants={fadeIn('right', 0.2)} 
            initial="hidden" 
            whileInView="show" 
            exit="hidden" 
            viewport={{ once: true }} 
            layoutScroll
          >
            <h2 className="text-center">Practicamos Ifa Tradicional del linaje Akinwande</h2>
          </motion.div>
        </div>

        {/* Contenido de la sección */}
        <div className="row">
          {/* Imagen descriptiva */}
          <div className="col-lg-4 col-md-12 col-12 img-sobre">
            <motion.div 
              className="about-img" 
              variants={fadeIn('right', 0.2)} 
              initial="hidden" 
              whileInView="show" 
              exit="hidden" 
              viewport={{ once: true }} 
              layoutScroll
            >
              <img
                src={sobre}
                alt="Nosotros"
                id="about-image"
                loading="lazy"
                className="img-fluid"
              />
            </motion.div>
          </div>

          {/* Texto descriptivo */}
          <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
            <motion.div 
              className="about-text" 
              variants={fadeIn('left', 0.2)} 
              initial="hidden" 
              whileInView="show" 
              exit="hidden" 
              viewport={{ once: true }} 
              layoutScroll
            >
              <p>
                Nuestro templo empieza en la ciudad de Puerto Ordaz en el año 2011 guiado bajo el linaje
                de Ifa Tope Akinwande. Este linaje tiene sus raíces en el Estado de Ogun, Abeokuta en Nigeria.
                Ifa tradicional se caracteriza por poseer una filosofía y teología que busca el elevamiento espiritual
                de cada individuo para que pueda llevar una vida placentera en su entorno y alcanzar las metas de su 
                propio destino. Todo esto se logra llevando a cabo las enseñanzas y guía del oráculo y con las
                recomendaciones y consejos de Orunmila (Deidad que conoce el destino de cada quien). Ifa reitera que siguiendo
                el Iwa Pele (Buen carácter) se puede alcanzar la felicidad aquí en la tierra (hablando de las cosas que nos
                hagan feliz individualmente, ya sea de riqueza no solamente monetaria sino de buenos hijos, buena pareja,
                larga vida, etc). El Iwa Pele tiene 4 pilares fundamentales los cuales son: Honestidad, paciencia, humildad y esperanza.
                Conoce más sobre esto.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Botón para conocer más */}
        <motion.div 
          className="row d-flex justify-content-center pt-5" 
          variants={fadeIn('up', 0.2)} 
          initial="hidden" 
          whileInView="show" 
          exit="hidden" 
          viewport={{ once: true }} 
          layoutScroll
        >
          <Link className="btn btn-success text-white" to="/nosotros">Conoce más</Link>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
