import React from 'react'
import { Link } from 'react-router-dom'
import Fetivales from '../parts/Fetivales'
import Africa from '../images/africa.jpg'
import OseItaDogun from '../images/OseItaDogun 18br2015.jpg'
import Ogboni from '../images/Ogboni.jpg'
import Orisa from '../images/orisa.jpg'
import Itelodu from '../images/itelodu.jpg'
import FondoIzquierdo from '../images/fondoLateral2.png'
import FondoSuperior from '../images/ide.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../animations/variants'

const Logros = () => {
  return (
    <>
    <section className='section-padding'>
      <div className='container miniSectionServices mt-5 pt-5'>
        <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
          <h2 className='text-center mb-5'>Logros del Egbe Iwori Aweda</h2>
        </motion.div>
        <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
        <p className='text-left'>
          El Egbe Iwori Aweda ha demostrado un compromiso profundo con la preservación 
          y promoción de las tradiciones de Ifá y Orisa. La creación de su propio templo, 
          la realización de ceremonias regulares y significativas, la organización de 
          festivales y la expansión internacional son logros que reflejan el espíritu 
          de iwa pele y la unidad de la comunidad. Estos logros no solo han fortalecido 
          a los integrantes del Egbe, sino que también han enriquecido vidas y creado 
          puentes de entendimiento y respeto en todo el mundo. Con cada ceremonia y 
          celebración, el Egbe Iwori Aweda reafirma su dedicación a las enseñanzas ancestrales, 
          creando un legado de devoción y crecimiento espiritual que perdurará por generaciones. <br /><br />
          El Egbe Iwori Aweda se ha destacado por su compromiso inquebrantable con las 
          tradiciones de Ifá y Orisa, alcanzando numerosos logros que reflejan la devoción, 
          la generosidad y el espíritu comunitario de sus integrantes. Desde la creación de 
          su propio templo hasta la realización de diversas ceremonias y festivales, el Egbe 
          ha demostrado ser un pilar fundamental en la preservación y promoción de la 
          espiritualidad Yoruba. A continuación, se presentan los logros más significativos 
          que han marcado la trayectoria del Egbe Iwori Aweda.
        </p>
        </motion.div>
      </div>
    </section>
      <div className='div-separador'>
        <div className="custom-shape-divider-bottom-1716559100 separadorBottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    <div className="div-largeimgAvance">
        <div className="container section-header pb-5">
          <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
            <h3 className=' text-center titlez'>La Creación de Nuestro Propio Templo</h3>
          </motion.div>
          <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
            <p className='text-left textz'>
              El Egbe Iwori Aweda ha recorrido un camino de crecimiento y transformación, reflejando 
              el compromiso y la dedicación de sus integrantes hacia la práctica de Ifá y Orisa. Uno 
              de los logros más significativos ha sido la creación de su propio templo, un espacio 
              sagrado que ha evolucionado desde humildes comienzos hasta convertirse en el corazón 
              de todas las actividades espirituales del Egbe. <br /> <br />
            </p>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
            <p className='text-left textz'>
              <strong>Los Primeros Pasos en Puerto Ordaz</strong><br /> En los inicios del Egbe, las ceremonias 
              y rituales se llevaban a cabo en un apartamento del Oluwo en Puerto Ordaz. Este espacio, 
              aunque limitado, se llenaba de energía y devoción gracias al espíritu de unidad y compromiso 
              de sus miembros. Fue en este ambiente que se cimentaron las bases de la comunidad, con cada 
              ceremonia reforzando los lazos entre los integrantes y fortaleciendo su fe en las enseñanzas de Ifá.<br /><br />
            </p>
          </motion.div>
          <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
            <p className='text-left textz'>
              <strong>La Finca en Puerto Ordaz: Un Paso Adelante</strong><br /> Reconociendo la necesidad de un 
              espacio más adecuado para las crecientes actividades del Egbe, uno de los integrantes del 
              concilio ofreció generosamente una finca en la misma localidad de Puerto Ordaz. Esta finca 
              se convirtió en el templo provisional del Egbe, un lugar donde se podían realizar festivales, 
              rituales, consagraciones y ebo con mayor libertad y amplitud.<br /><br />
            </p>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
            <p className='text-left textz'>
              <strong>El Traslado a Puerto Píritu</strong><br /> Con el tiempo, las necesidades del Egbe 
              continuaron creciendo, y surgió la oportunidad de trasladarse a Puerto Píritu. Otro integrante 
              del Egbe ofreció una quinta con el espacio suficiente para convertirse en el nuevo templo. 
              Este cambio permitió al Egbe expandir sus actividades y continuar celebrando sus festivales 
              y rituales en un entorno más amplio y adecuado.<br /><br />
            </p>
          </motion.div>
          <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
            <p className='text-left textz'>
              <strong>La Adquisición de Nuestro Propio Templo</strong><br /> Finalmente, en un esfuerzo conjunto 
              que involucró la dedicación y los recursos de varios integrantes del Egbe, se logró la 
              adquisición de un espacio propio en Puerto Píritu. Este logro es un testimonio del compromiso 
              y la colaboración de la comunidad, reflejando los valores de iwa pele que guían cada acción del Egbe.
              Hoy en día, el templo del Egbe Iwori Aweda es un lugar de paz y espiritualidad, donde se realizan 
              todas las ceremonias, rituales, consagraciones y ebo. Este espacio sagrado es el resultado de años 
              de esfuerzo colectivo y dedicación, simbolizando la unidad y la fortaleza de la comunidad.<br />
            </p>
          </motion.div>
        </div>
    </div>
      <div className='div-separador'>
        <div className="custom-shape-divider-top-1716557548 separadorTop">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    <section className='section-padding'>
      <div className="container miniSectionServices">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 img-sobre pt-5">
            <motion.div className="about-img" variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
              <img
                src={OseItaDogun}
                alt={"Ose Ita D'Ogun"}
                id={"about-image"}
                className={"img-fluid"}
              />
            </motion.div>
          </div>
          <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre pt-5">
            <div className="about-text">
              <motion.div className="about-img" variants={fadeIn('down', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                <h3>Ceremonias de Ose Ita d'ogun</h3>
              </motion.div>
              <motion.div className="about-img" variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                <p>
                Uno de los hitos más destacados del Egbe Iwori Aweda ha sido la realización 
                ininterrumpida de las ceremonias de Ose Itadogun desde el 18 de abril de 2015. 
                Estas ceremonias, que se celebran cada 17 días, son rituales dedicados a la 
                renovación y fortalecimiento de la conexión con los Orisa y el Ifá. La 
                consistencia y dedicación del Egbe en la ejecución de estas ceremonias han 
                permitido mantener viva la espiritualidad y el compromiso de sus integrantes, 
                consolidando una tradición que nutre y protege a la comunidad de manera constante.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section-padding'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
              <div className="about-text">
                <motion.div className="about-img" variants={fadeIn('left', 0.6)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h3>Ceremonias de Consagración de Itelodu</h3>
                </motion.div>
                <motion.div className="about-img" variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <p>
                  El Egbe Iwori Aweda también se ha distinguido por llevar a cabo ceremonias 
                  de consagración de Itelodu, un ritual sagrado donde se consagran Babalawo e 
                  Iyanifa. Estas ceremonias, fundamentales en la tradición Yoruba, son momentos 
                  de profunda transformación y dedicación para quienes son iniciados. A través 
                  de estos rituales, el Egbe ha formado a numerosos Babalawo e Iyanifa, fortaleciendo 
                  la sabiduría y la práctica espiritual dentro de la comunidad.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 img-sobre">
            <motion.div className="about-img" variants={fadeIn('right', 0.4)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
              <img
                src={Itelodu}
                alt={"Itelodu"}
                id={"about-image"}
                className={"img-fluid"}
              />
            </motion.div>
            </div>
          </div>
        </div>
    </section>
    <section className='section-padding'>
        <div className="container miniSectionServices">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12 img-sobre">
            <motion.div className="about-img" variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
              <img
                src={Orisa}
                alt={"Orisa"}
                id={"about-image"}
                className={"img-fluid"}
              />
            </motion.div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
              <div className="about-text">
                <motion.div className="about-img" variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h3>Consagraciones de Isefa</h3>
                </motion.div>
                <motion.div className="about-img" variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <p>
                  Otro logro significativo ha sido la realización de múltiples consagraciones 
                  de Isefa. Estas ceremonias son esenciales para quienes inician su camino 
                  en la práctica de Ifá, marcando el comienzo de su relación formal con los 
                  Orisa y el sistema de Ifá. El Egbe Iwori Aweda ha guiado a muchos aspirantes 
                  en este proceso, asegurando una base sólida para su desarrollo espiritual y personal.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section className='section-padding'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
              <div className="about-text">
                <motion.div className="about-img" variants={fadeIn('right', 0.6)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h3>Viajes a África</h3>
                </motion.div>
                <motion.div className="about-img" variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <p>
                    El Egbe Iwori Aweda ha llevado a cabo tres viajes a África, un continente
                    que es el corazón de las tradiciones Yoruba. Durante estos viajes, diversos 
                    integrantes del Egbe han sido consagrados a diferentes Orisa, profundizando 
                    su conexión con las raíces ancestrales y enriqueciendo la práctica espiritual 
                    del Egbe. Estas experiencias no solo han fortalecido a los individuos, sino 
                    que también han traído un mayor entendimiento y respeto por las tradiciones 
                    originales de Ifá y Orisa.
                </p>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 img-sobre">
            <motion.div className="about-img" variants={fadeIn('left', 0.4)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
              <img
                src={Africa}
                alt={"Africa"}
                id={"about-image"}
                className={"img-fluid"}
              />
            </motion.div>
            </div>
          </div>
        </div>
    </section>
    <section className='section-padding'>
        <div className="container miniSectionServices">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12 img-sobre">
            <motion.div className="about-img" variants={fadeIn('right', 0.4)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
              <img
                src={Ogboni}
                alt={"Ogboni"}
                id={"about-image"}
                className={"img-fluid"}
              />
            </motion.div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
              <div className="about-text">
                <motion.div className="about-img" variants={fadeIn('left', 0.6)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h3>Consagraciones de Ogboni</h3>
                </motion.div>
                <motion.div className="about-img" variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <p>
                    En el marco de estos viajes a África, varios integrantes del Egbe han 
                    tenido el honor de ser consagrados en la sociedad de Ogboni. Esta sociedad 
                    es una organización religiosa y política dentro de la cultura Yoruba, 
                    que se encarga de mantener las leyes y tradiciones ancestrales. Las consagraciones 
                    de Ogboni han sido un gran honor para el Egbe Iwori Aweda, reforzando su compromiso 
                    con la preservación y promoción de las enseñanzas tradicionales Yoruba.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
    </section>
      <div className='div-separador'>
        <div className="custom-shape-divider-bottom-1716559100 separadorBottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="custom-shape-divider-top-1716557548 separadorTop">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    <section className='section-padding'>
        <div className="container miniSectionServices">
          
          <Fetivales />
          
        </div>
    </section>
      <div className='div-separador'>
        <div className="custom-shape-divider-bottom-1716559100 separadorBottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    <section className='div-largeimgAvance2'>
      <div className="container section-header pb-5">
        <div className="row">
        <motion.div className="about-img" variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
          <h3 className='text-left mt-5 titlez'>Otras menciones</h3>
        </motion.div>
        <motion.div className="about-img" variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
          <p className='textz'>
            Tambien cabe mencionar que el Egbe Iwori Aweda ha extendido su influencia más allá de Venezuela, realizando 
            consagraciones en países como Colombia y Estados Unidos. Esta expansión internacional 
            ha permitido que las enseñanzas de Ifá y Orisa alcancen a una audiencia más amplia, 
            promoviendo un intercambio cultural y espiritual enriquecedor. <br /><br />
            Además, el Egbe ha formado un concilio de 16 mayores, quienes lideran y guían al 
            Egbe con sabiduría y experiencia.
          </p>
        </motion.div>
        </div>
      </div>
    </section>
      <div className='div-separador'>
        <div className="custom-shape-divider-top-1716557548 separadorTop">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    <section className='section-padding'>
      <div className='container miniSectionServices'>
        <div className="row gy-5 pb-5 pt-5" style={{ perspective: 360 }}>
          <motion.div variants={fadeIn('backward', 0.2)} initial='hidden' whileInView='show' exit='hidden'  layoutScroll>
            <p className="text-center">
              En Egbe Iwory Aweda, creemos que cada paso en esta senda sagrada nos acerca más a la comprensión 
              de nuestro propósito y destino. <br />
              Creemos que todos tenemos el poder de conectarnos con la divinidad. A través de la fe, podemos 
              encontrar la fuerza para superar los desafíos, la sabiduría para tomar las decisiones correctas 
              y el amor para vivir una vida plena. <br />
              Si estás listo para dar un paso adelante en tu camino espiritual, contáctanos. Estaremos encantados 
              de ayudarte a encontrar tu camino.
            </p>
          </motion.div>
        </div>
        <div className="row gy-5" style={{ perspective: 360 }}>
            <motion.div variants={fadeIn('backward', 0.4)} initial='hidden' whileInView='show' exit='hidden'  layoutScroll>
              <Link className='ctaText' to="/contact"><h1 className='pb-5 ctaText text-center'>¡Agenda una Cita Hoy Mismo!</h1></Link>
            </motion.div>
          </div >
          <div className="row gy-5" style={{ perspective: 360 }}>
            <motion.div variants={fadeIn('backward', 0.6)} initial='hidden' whileInView='show' exit='hidden'  layoutScroll>
              <Link to="/contact" className="btn btn-success d-grid gap-2 col-6 mx-auto text-white cta">Contactanos</Link>
            </motion.div>
          </div>
      </div>
    </section>
    <motion.div className="fondoLateral2" variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'>
        <img src={FondoIzquierdo} alt="ikin" />
    </motion.div>
    <motion.div className="fondoLateral3" variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden'>
        <img src={FondoSuperior} alt="ide" />
    </motion.div>
    </>
  )
}

export default Logros