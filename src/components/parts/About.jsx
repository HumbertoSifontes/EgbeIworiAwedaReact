import React from 'react'
import sobre from '../images/sobre.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section class="section-padding"  id="nosotros">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Practicamos Ifa Tradicional del linaje Akinwande</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-12 col-12 img-sobre">
              <div class="about-img">
                <img
                  src={sobre}
                  alt={'Nosotros'}
                  id={"about-image"}
                  class={"img-fluid"}
                />
              </div>
            </div>
            <div class="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
              <div class="about-text">
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
                <Link className="btn btn-success text-white btnNosotros" to={'/nosotros'}>Conoce mas</Link>
              </div>
            </div>
          </div>
      </div>
    </section>

  )
}

export default About