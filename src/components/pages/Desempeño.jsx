import React from 'react'
import { Link } from 'react-router-dom'
import servicios from '../images/Servicios.jpeg'
import Servicios1 from '../images/Servicio1.jpeg'
import Servicios2 from '../images/Servicio2.jpeg'
import Servicios3 from '../images/Servicio3.jpeg'
import VideoFondo from '../images/videofondo.mp4'
import Itefa from '../images/itelodu.jpg'
import Isefa from '../images/isefa.jpg'
import Esentaye from '../images/Esentaye.jpg'
import FondoDerecho from '../images/iroke.png'
import FondoSuperior from '../images/ide.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../animations/variants'

const Desempeño = () => {
  return (
    <>
      <section>
        <div className="container textoH3" id='divVideoFondo'>
          <motion.div className="porpouse-text textoVideoFondo" variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'>
            <h3 className='textoFondo'>En Egbe Iwori Aweda, ofrecemos una variedad de 
              servicios relacionados con la religión Yoruba que 
              pueden ayudarte a encontrar tu camino. Los servicios 
              específicos que ofrecemos incluyen:
            </h3>
            <div className="d-flex justify-content-center">
              <a href="#next"><div className="flecha2"></div></a>
            </div>
          </motion.div>
          <video
            src={VideoFondo}
            alt={'Fondo'}
            id={"videoFondo"}
            className={"img-fluid"}
            controls
            autoPlay
            loop
            muted
          />
          <div className="capaVideoFondo"></div>
        </div>
      </section>
      <div className='div-separadorVideo'>
        <div className='miniSectionServices'>
          <div className="custom-shape-divider-top-1716557548">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>
      </div>
      <section className='section-padding'>
        <div className="container miniSectionServices" id='next'>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12 img-sobre">
              <motion.div variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className="about-img">
                <img
                  src={servicios}
                  alt={'Nosotros'}
                  id={"about-image"}
                  className={"img-fluid"}
                />
              </motion.div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
              <div className="about-text">
                <motion.div variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'>
                  <h2>Idafa</h2>
                </motion.div>
                <br />
                <motion.div variants={fadeIn('left', 0.2)} initial='hidden' animate='show' exit='hidden'>
                  <p>
                    Se trata de obtener los mensajes revelados por Ifá a través 
                    del okpele o los ikines. No existe una razón por la cual una 
                    persona no pueda consultar Ifá, puede ser consultado para 
                    escoger pareja, casarse, concebir, durante un embarazo, el 
                    nacimiento, para la prosperidad, salud, estabilidad. Así como 
                    para combatir la adversidad o resolver algún problema. El Babalawo 
                    es capaz de analizar las dificultades del cliente y además presentar 
                    las soluciones mediante un profundo estudio de los mensajes 
                    revelados, los sacrificios, rituales, los tabúes y advertencias.
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
      </div>
      <div>
        <div className='div-largeimg3'>
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
        <div className='container miniSectionServices'>
          <div className="row py-5">
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
              <div className="about-text">
                <motion.div variants={fadeIn('right', 0.6)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h2>Esentaye</h2>
                </motion.div>
                <br />
                <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <p>
                    Esentaye es el ritual práctico dado a un nuevo bebé, en el rango de 
                    los primeros 16 días del nacimiento. El Babalawo busca a través del 
                    oráculo de Ifá, mas los rituales que abarcan en este procedimiento 
                    para ver los presagios que depara el destino a la vida del recién nacido. <br />
                    Esentaye significa pisar y caminar por el mundo, es muy importante hacer 
                    posible esto a un nuevo niño, para mantenerlo enfocado en pro a su buen 
                    destino, al crecimiento espiritual, mayor soporte ancestral y afianzamiento 
                    a la vida en la tierra.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 img-sobre">
              <motion.div className="about-img" variants={fadeIn('left', 0.4)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                <img
                  src={Esentaye}
                  alt={'esentaye'}
                  id={"about-image"}
                  className={"img-fluid"}
                />
              </motion.div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
              <div className="about-text">
                <motion.div variants={fadeIn('right', 0.6)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h2>Isefa</h2>
                </motion.div>
                <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <p>
                    La ceremonia de ISEFA, o mano de ifa como es conocido mayormente en el 
                    continente americano. Es el primer paso al autoconocimiento espiritual 
                    y el acercamiento a la esencia de orunmila. También acompañado por un 
                    crecimiento espiritual el cual ayuda a despertar nuestro Ori (ser interior). <br />
                    Es la previa antes de tomar el paso de iniciarte en el camino de ifa 
                    completamente. La persona que se le realiza este ritual se le revela 
                    un signo el cual será una guía de introspección y análisis, que lo ayudará 
                    hacer las cosas bien y a tomar decisiones que sean funcionales para su 
                    alineación con su buen destino y buen balance con su entorno.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 img-sobre">
              <motion.div className="about-img" variants={fadeIn('left', 0.4)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                <img
                  src={Isefa}
                  alt={'isefa'}
                  id={"about-image"}
                  className={"img-fluid"}
                />
              </motion.div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
              <div className="about-text">
                <motion.div variants={fadeIn('right', 0.6)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h2>Itefa</h2>
                </motion.div>
                <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <p>
                    La ceremonia de ITEFA es la iniciación completa en ifa, que revela el destino 
                    completo de una persona. A diferencia del Isefa/mano de ifa. Que revela un odu 
                    para la persona a cuál se le realiza, con orientaciones más profundas que en 
                    las indicadas en un dafa. En el itefa el odu que se le revela en la ceremonia 
                    es el que lo acompañara el resto de su vida el cual revela las etapas del pasado, 
                    presente, futuro y lo orienta a como debe actuar en cada una de las situaciones 
                    que se le presentaran en la vida y a tomar el rumbo correcto para la manifestación 
                    del buen destino de la persona. Esta ceremonia aparte de conceder la gran bendición 
                    de mostrarle el destino a la persona también le otorga una gran posición consagrándolo 
                    como sacerdote o sacerdotisa de ifa. Babalawo/Iyanifa.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 img-sobre">
              <motion.div className="about-img" variants={fadeIn('left', 0.4)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                <img
                  src={Itefa}
                  alt={'itefa'}
                  id={"about-image"}
                  className={"img-fluid"}
                />
              </motion.div>
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
      </div>
      <div>
        <div className='div-largeimg3'>
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
            <div className="col-lg-4 col-md-12 col-12 img-sobre">
              <motion.div className="about-img" variants={fadeIn('left', 0.4)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                <img
                  src={Servicios2}
                  alt={'adimu'}
                  id={"about-image"}
                  className={"img-fluid"}
                />
              </motion.div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
              <div className="about-text">
                <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h2>Adimú</h2>
                </motion.div>
                <motion.div variants={fadeIn('right', 0.4)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <p>
                    Se trata de presentar una ofrenda a los Orisas y Deidades 
                    con el fin de utilizarla como catalizador de energías para 
                    nuestro beneficio. La forma en que es ofrecido un Adimú va 
                    a depender de lo que determine Ifá, puede ser frutas, bebidas, 
                    comidas y así sucesivamente.
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
      </div>
      <div>
        <div className='div-largeimg3'>
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
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
              <div className="about-text">
                <motion.div variants={fadeIn('right', 0.6)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h2>Akose</h2>
                </motion.div>
                <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <p>
                    Akose es un preparado medicinal de ifa donde un babalawo tiene que 
                    utilizar variedad de productos como hierbas, hojas, raíces, plumas, 
                    Iyerosun y otros materiales para producir los akose ifa. Esto es totalmente 
                    diferente de Ebo riru (sacrificio y rituales). <br />
                    A pesar del significado del Ebo, no podemos prescindir de estas medicinas 
                    espirituales, pueden ser en forma de jabón, polvo, cremas amuletos y así sucesivamente. <br />
                    Es bien sabido por los practicantes de la cultura yoruba en nigeria que 
                    cada odu tiene una serie de innumerables rezos y que cada uno tiene a su vez su AKOSE (medicina).
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 img-sobre">
              <motion.div className="about-img" variants={fadeIn('left', 0.4)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                <img
                  src={Servicios3}
                  alt={'akose'}
                  id={"about-image"}
                  className={"img-fluid"}
                />
              </motion.div>
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
      </div>
      <div>
        <div className='div-largeimg3'>
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
        <div className='container miniSectionServices'>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="porpouse-text textoServicios">
                <motion.div variants={fadeIn('right', 0.6)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h2>Ebo riru</h2>
                </motion.div>
                <br />
                <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <p>
                    Se trata de un acto poderoso de sacrificios y rituales para 
                    que el cliente logre canalizar la energía de las fuerzas de 
                    la naturaleza a su favor. Es a través de este sacrifício que 
                    los seres humanos abrimos las puertas a nuestras oraciones. 
                    Después de realizada la consulta, el Awo se encarga de preguntar 
                    los materiales necesarios para el sacrifico de acuerdo con 
                    el Odu específico que fue revelado para la persona, quien debe 
                    proporcionar dichos materiales para la ejecución del Ebo-rirú 
                    posteriormente al Idafá.
                    Este sacrificio puede ser ofrecido por cuatro razones:
                  </p>
                </motion.div>
                <br />
                <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                <h4> <b>1.</b> </h4>
                <p>
                  Cuando un cliente está positivamente en tono con su destino, 
                  son aconsejados que ofrezcan ebó así continúen en armonía con su destino.
                </p>
                </motion.div>
                <br />
                <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                <h4> <b>2.</b> </h4>
                <p>
                  Cuando el cliente se encuentra a tono positivamente con su 
                  destino y al mismo tiempo se encuentra que en él hay algunas 
                  fuerzas negativas externas que pueden interrumpir la armonía 
                  del cliente con su destino. Ebo rírú se le prescribirá al cliente 
                  para que así pueda superar estas influencias negativas en su vida.
                </p>
                </motion.div>
                <br />
                <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                <h4> <b>3.</b> </h4>
                <p>
                  Cuando el cliente ha logrado disfrutar de una total armonía con 
                  su vida, pero se encuentra que está alejándose de esta relación 
                  armoniosa con su destino, se le recomienda hacer ebo para alejar 
                  esta negatividad de su destino.
                </p>
                </motion.div>
                <br />
                <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                <h4> <b>4.</b> </h4>
                <p>
                  Cuando el cliente ha sido arrastrado fuera de su destino y 
                  una interrupción lo ha llevado hasta ahí, existe la necesidad 
                  de regresar al cliente al camino correcto y armonioso de su destino.
                </p>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 img-sobre">
              <motion.div className="about-img" variants={fadeIn('left', 0.4)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                <img
                  src={Servicios1}
                  alt={'Nosotros'}
                  id={"about-image"}
                  className={"img-fluid"}
                  controls
                  autoPlay
                  loop
                  muted
                />
              </motion.div>
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
      </div>
      <div>
        <div className='div-largeimg3'>
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
        <div className='container miniSectionServices'>
          <div className="row gy-5 pb-5 pt-5" style={{ perspective: 360 }}>
            <motion.div variants={fadeIn('backward', 0.2)} initial='hidden' whileInView='show' exit='hidden'  layoutScroll>
              <p className="text-center">
                En el Egbe Iwori Aweda, nos enorgullecemos de nuestro compromiso inquebrantable con las 
                tradiciones de Ifá y Orisa. Nuestro enfoque está basado en la autenticidad, la devoción 
                y el profundo conocimiento transmitido a través de generaciones. Al elegir nuestros servicios, 
                te unes a una comunidad dedicada al crecimiento espiritual y al bienestar integral. <br />
                Si estás listo para embarcarte en un viaje espiritual que transformará tu vida, te invitamos 
                a conocer más sobre nuestros servicios. Haz clic aquí para descubrir cómo nuestras ceremonias 
                y rituales pueden ayudarte a encontrar la paz y el propósito que buscas. <br /> ¡Te esperamos con 
                los brazos abiertos!
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
      <motion.div className="fondoLateral6" variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden'>
        <img src={FondoDerecho} alt="esu" />
      </motion.div>
      <motion.div className="fondoLateral3" variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden'>
        <img src={FondoSuperior} alt="ide" />
      </motion.div>
    </>
  )
}

export default Desempeño