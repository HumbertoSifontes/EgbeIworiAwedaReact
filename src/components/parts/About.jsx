import React from 'react'
import sobre from '../images/sobre.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="section-padding"  id="nosotros">
      <div className="container miniSectionServices">
        <div className="row pb-5">
          <div className="col-md-12">
            <h2 className='text-center'>Practicamos Ifa Tradicional del linaje Akinwande</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 img-sobre">
            <div className="about-img">
              <img
                src={sobre}
                alt={'Nosotros'}
                id={"about-image"}
                className={"img-fluid"}
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
            <div className="about-text">
              <p>
              Nuestro templo empieza en la ciuda de Puerto Ordaz en el año 2011 guiado bajo el linaje
              de Ifa Tope Akinwande. Este linaje tiene sus raices en el Estado de Ogun, Abeokuta en Nigeria.
              Ifa tradicional es caracterizado por poseer una filosofia y teologia que busca el elevamiento espiritual
              de cada individuo para que pueda llevar una vida placentera en su entorno y alcanzar las metas de su 
              propio destino. Todo esto se logra llevando a cabo las enseñanzas y guia del oraculo y con las
              recomendaciones y consejos de Orunmila (Deidad que conoce el destino de cada quien). Ifa reitera que siguiendo
              el Iwa Pele (Buen caracter) se puede alcanzar la felicidad aqui en la tierra (hablamdo de las cosas que nos
              hagan feliz individualmente, ya sea de riqueza no solamente monetaria sino de buenos hijos, buena pareja,
              larga vida, etc). El iwa Pele tiene 4 pilares fundamentales los cuales son: Honestidad, paciencia, humildad y esperanza.
              conoce mas sobre esto.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center pt-5">
          <Link className="btn btn-success text-white" to={'/nosotros'}>Conoce mas</Link>
        </div>
      </div>
    </section>

  )
}

export default About