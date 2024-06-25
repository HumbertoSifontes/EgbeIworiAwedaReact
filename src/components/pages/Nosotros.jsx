import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeIn } from '../../animations/variants'
import nosotros from '../images/nosotros.jpg'
import nosotros5 from '../images/nosotros5.jpg'
import VideoNosotros from '../images/VideoNosotros.mp4'
import FondoDerecho from '../images/opon.png'
import FondoSuperior from '../images/ide.png'

const Nosotros = () => {
  return (
    <>
      <section className='section-padding'>
        <div className="container miniSectionServices">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12 img-sobre">
              <motion.div variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className="about-img">
                <img
                  src={nosotros}
                  alt={'Nosotros'}
                  id={"about-image"}
                  className={"img-fluid"}
                />
              </motion.div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
              <div className="about-text">
                <motion.div variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'>
                  <h2>Nuestra Historia</h2>
                </motion.div>
                <br />
                <motion.div variants={fadeIn('left', 0.2)} initial='hidden' animate='show' exit='hidden'>
                  <p>
                    Nuestro camino comenzó hace décadas, cuando un grupo de apasionados seguidores 
                    de la religión Yoruba Tradicional se unieron con el deseo de explorar más allá 
                    de las superficies y adentrarse en las profundidades de nuestra herencia espiritual. 
                    Guiados por la sabiduría de Babalawos con más experiencia y la rica tradición de Ifá, 
                    comenzamos a trazar un camino que nos llevaría a un entendimiento más profundo 
                    de nosotros mismos y del mundo que nos rodea.<br/>

                    El Egbe Iwory Aweda está para instruir a las personas sobre la religión Yoruba 
                    Tradicional. Creemos en compartir la luz de la sabiduría ancestral con aquellos 
                    que buscan aprender y conectar con la esencia misma de nuestra tradición. Cada 
                    uno de nosotros es un estudiante y un maestro en este viaje, y nos enorgullece 
                    servir como guías en el camino de la exploración espiritual.
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
      <div className='div-largeimg2'>
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
            <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
              <h2 className='text-center mb-5'>Nuestra Identidad y Propósito</h2>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
              <p>
                En Egbe Iwory Aweda, no solo somos una comunidad, somos una familia espiritual. 
                Nuestra identidad se forja a partir de la profunda conexión que compartimos con 
                las energías cósmicas, las deidades y los ancestros que han forjado la religión 
                yoruba a lo largo de los siglos. Somos guardianes de la tradición, comprometidos 
                en preservar y transmitir sus enseñanzas sagradas a las generaciones presentes y futuras.

                Nuestro propósito es claro y trascendente: Somos faros de luz en la oscuridad, 
                brindando guía y consejo a aquellos que buscan respuestas en su camino. A través 
                de nuestras consultas de adivinación, rituales y festivales, ofrecemos una oportunidad 
                para que las personas se conecten con su esencia espiritual más profunda y encuentren 
                claridad en medio de la incertidumbre.

                Estamos ubicados en Puerto Píritu – Venezuela, abriendo nuestras puertas y corazones 
                para aquellos que buscan una auténtica experiencia yoruba.

                En Egbe Iwory Aweda, nuestro compromiso es ir de la mano con la verdad, la sabiduría 
                y la conexión espiritual que nos guía en cada paso que damos. Te invitamos a unirte 
                a nosotros en este viaje de descubrimiento y crecimiento, donde cada momento es una 
                oportunidad para profundizar en la maravilla de la religión Yoruba Tradicional.
              </p>
            </motion.div>
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
      <div className='div-largeimg2'>
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
            <div className="col-lg-4 col-md-12 col-12 img-sobre">
              <motion.div className="about-img" variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                <img
                  src={nosotros5}
                  alt={'Nosotros'}
                  id={"about-image"}
                  className={"img-fluid"}
                />
              </motion.div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
              <div className="about-text">
                <motion.div variants={fadeIn('down', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h2>Nuestros Valores</h2>
                </motion.div>
                  <br />
                <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <p>
                    Nos regimos siempre por el respeto, amor, humildad, unión, familiaridad, constancia, 
                    compromiso, armonía, sacrificio y servicio. Reconocemos la importancia de honrar 
                    a nuestros ancestros y deidades, así como a todos aquellos que nos han precedido 
                    en este camino espiritual. Valoramos la diversidad y la inclusión, creyendo que 
                    cada individuo tiene un lugar en esta comunidad, sin importar su origen o trayectoria.
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
      <div className='div-largeimg2'>
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
            <div className="col-lg-6 col-md-12 col-12 textoSobre">
              <div>
                <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h2>Misión y Visión: Un Compromiso con la Sabiduría y la Unidad</h2>
                  <br />
                  <p className='text-left'>
                  En Egbe Iwory Aweda, estamos guiados por una misión y visión profundamente 
                  arraigadas en el corazón mismo de la religión yoruba. Nuestros objetivos 
                  son un reflejo de nuestro compromiso con la sabiduría ancestral y la 
                  búsqueda incesante de la conexión espiritual.
                  </p>
                </motion.div>
                  <br />
                <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h4> <b>Mision:</b> </h4>
                  <p className='text-left'>
                    Como un templo religioso y familiar, nuestra misión es iluminar 
                    el camino hacia la riqueza cultural y espiritual de la religión 
                    Yoruba Tradicional a través de la palabra de Ifá. Nos esforzamos 
                    por revelar la profundidad del tradicionalismo de Ifá y compartirlo 
                    con aquellos que buscan una comprensión más profunda de su identidad 
                    espiritual. Nuestra comunidad se dedica a ser un faro de conocimiento, 
                    proporcionando orientación y enseñanza para todos los que deseen 
                    explorar la tradición yoruba en su forma más auténtica.
                  </p>
                </motion.div>
                  <br />
                <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h4> <b>Vision:</b> </h4>
                  <p className='text-left'>
                    Miramos hacia el futuro con la visión de expandir los horizontes de 
                    la cultura yoruba tradicional a través de nuestras enseñanzas y prácticas. 
                    Anhelamos alcanzar diferentes regiones del mundo, extendiendo los 
                    brazos de nuestra comunidad y a todas las personas que deseen explorar 
                    y experimentar la esencia de nuestra rica tradición. Creemos que las 
                    enseñanzas de Ifá son universales y pueden tocar los corazones de personas 
                    de todas las culturas y orígenes. Nuestras puertas están abiertas, 
                    invitando a aquellos que buscan una guía y una conexión con su ser 
                    interior para cumplir con su destino.
                  </p>
                </motion.div>
                  <br />
                <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h4> <b>Nuestra Misión en Acción:</b> </h4>
                  <p className='text-left'>
                    Nuestra misión es dar a conocer el verdadero significado de la religión 
                    Yoruba Tradicional a través de nuestra asistencia personalizada, que 
                    han sido legado de nuestros ancestros para poder ayudar a las personas 
                    que vienen en búsqueda de una guía para organizar sus vidas. En Egbe 
                    Iwory Aweda, no solo estamos comprometidos con el presente, sino también 
                    con el legado que dejaremos para las generaciones venideras. Nuestra misión 
                    y visión nos inspiran a ser portadores de luz y conocimiento, y a establecer 
                    un puente entre el pasado y el futuro a través de la religión yoruba 
                    tradicional. Además de nuestros servicios y ceremonias, también nos dedicamos 
                    a realizar obras de caridad en Puerto Píritu. Cada sábado, servimos una gran 
                    cantidad de comida a los vecinos y pobladores de la comunidad. Estas obras 
                    de caridad son una forma de devolver a la comunidad y de compartir el amor 
                    y la generosidad que hemos recibido de nuestros ancestros.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 img-sobre">
              <motion.div variants={fadeIn('right', 0.4)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll className="about-img">
                <video
                  src={VideoNosotros}
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
      <div className='div-largeimg2'>
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
                Si buscas un lugar donde puedas explorar tus raíces espirituales, aprender de los sabios y experimentar 
                la profunda conexión que la religión Yoruba Tradicional ofrece, te damos la bienvenida a unirte a nuestra 
                familia Egbe Iwory Aweda. Ya seas un buscador incansable, un amante del conocimiento o alguien en busca 
                de respuestas, te invitamos a compartir este camino con nosotros.
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
    <motion.div className="fondoLateral4" variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden'>
      <img src={FondoDerecho} alt="tablero" />
    </motion.div>
    <motion.div className="fondoLateral3" variants={fadeIn('left', 0.2)} initial='hidden' animate='show' exit='hidden'>
      <img src={FondoSuperior} alt="ide" />
    </motion.div>
    </>
  )
}

export default Nosotros