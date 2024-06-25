import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from '../../animations/variants'
import Modal from 'react-modal';
import oluwo from '../images/oluwo.jpg';
import aseda from '../images/aseda.jpg';
import akoda from '../images/akoda.jpg';
import ojugbona from '../images/ojugbona.jpg';
import agiri from '../images/pedroBarrios.jpg';
import vacio from '../images/Blank-Avatar.png';
import agbongbon from '../images/agbongbon.jpeg';
import sokinloju from '../images/sokinloju.png';
import asiwaju from '../images/asiwaju.png';
import agunsin from '../images/ogunkorede.png';
import muyuwa from '../images/muyuwa.png';
import pedroCarrion from '../images/pedroCarrion.jpg';
import surepawo from '../images/surepawo.jpg';
import balogun from '../images/balogun.jpg';
import FondoIzquierdo from '../images/opele.png'
import FondoSuperior from '../images/ide.png'

Modal.setAppElement('#root');

const characterData = [
  {
    name: 'Guillermo Vega',
    secondName: 'Ifa Lola',
    title: 'Oluwo',
    highlightTitle: true,
    highlightedTitleContent: 'Apena Ogboni',
    description: 'Babalawo con 21 años de trayectoria',
    detailedDescription: (
      <>
        Como Oluwo es el líder principal del concilio, el más experimentado 
        y sabio entre los miembros. Tiene la autoridad suprema en las 
        decisiones importantes y es el encargado de dirigir las ceremonias 
        más relevantes. Es responsable de mantener la cohesión y armonía 
        dentro del Ilé, asegurando que todas las actividades se realicen 
        de acuerdo con las tradiciones y leyes espirituales de Ifá.
      </>
    ),
    image: oluwo
  },
  {
    name: 'Juan Vega',
    secondName: 'Ifa Seun',
    title: 'Akoda',
    highlightTitle: true,
    highlightedTitleContent: 'Gege Ogboni',
    description: 'Babalawo con 21 años de trayectoria',
    detailedDescription: (
      <>
        Como Akoda es el segundo en la jerarquía del concilio. 
        Actúa como mano derecha del Oluwo y puede reemplazarlo 
        en su ausencia. Su papel incluye la supervisión de ceremonias, 
        el apoyo en la toma de decisiones cruciales y la ejecución de 
        las instrucciones del Oluwo. El Akoda también puede desempeñar 
        funciones administrativas y de organización dentro del Ilé. <br />
        Como segundo al mando es el mas experimentado en akose y encantos.
      </>
    ),
    image: akoda
  },
  {
    name: 'Julian Gascon',
    secondName: 'Ogun Biyi',
    title: 'Aseda',
    highlightTitle: false,
    description: 'Babalawo con 18 años de trayectoria',
    detailedDescription: (
      <>
        Julian Gascon es Aseda, un título que refleja su 
        sabiduría y experiencia en la religión yoruba. <br />
        El Aseda es el guardián de la historia y los registros del concilio. 
        Su tarea principal es documentar todas las actividades, ceremonias 
        y eventos importantes, asegurando que se preserven para las 
        generaciones futuras. El Aseda también puede contar historias y 
        leyendas ancestrales que fortalecen la identidad cultural y espiritual de la comunidad.<br /><br />
        <strong>Experiencia:</strong> Con 16 años de consagrado como Babalawo, he participado 
        en varios festivales y consagraciones. He realizado múltiples 
        iniciaciones de ifá / orisas, medicinas, ebo rirús y adimus tanto 
        para integrantes del egbe como para personas que en su momento 
        llegaron por consultas y orientación, e incluso para religiosos 
        de otras casas. <br /><br />
        <strong>Logros:</strong> Gracias a Ifá, y a mis mayores, mi mayor logro es el milagro 
        de tener a mi familia (tanto religiosa como sanguínea), y la capacidad 
        que nos da Ifá para orientarnos en nuestro día a día.
      </>
    ),
    image: aseda
  },
  {
    name: 'Marsel Yousef',
    secondName: '?',
    title: 'Agbongbon',
    highlightTitle: true,
    highlightedTitleContent: 'Gege Ogboni',
    description: 'Babalawo con 14 años de trayectoria',
    detailedDescription: (
      <>
        Ha sido fundamental en la promoción y difusión de las enseñanzas de Ifá. <br />
        Como Agbongbon es un experto en Oriki (cantos y alabanzas) y es considerado 
        la memoria viva de la familia y el concilio. Se encarga de recitar historias, 
        mitos y elogios durante las ceremonias y festividades. Su habilidad para 
        narrar de manera elocuente ayuda a mantener viva la tradición oral yoruba 
        y a educar a los más jóvenes sobre sus raíces.
      </>
    ),
    image: agbongbon
  },
  {
    name: 'Pedro Barrios',
    secondName: 'Ifa Lowo',
    title: 'Agiri',
    highlightTitle: true,
    highlightedTitleContent: 'Gege Ogboni',
    description: 'Babalawo con ? años de trayectoria',
    detailedDescription: (
      <>
        Es conocido por su dedicación y compromiso con la comunidad yoruba. <br />
        Como Agiri actúa como el mensajero del concilio, encargado de transmitir 
        noticias, instrucciones y comunicaciones tanto dentro del Ilé como con 
        otras comunidades. Su rol es vital para mantener la coordinación y la 
        fluidez en las actividades del Ilé, asegurando que todos los miembros 
        estén informados sobre las decisiones y eventos importantes.
      </>
    ),
    image: agiri
  },
  {
    name: 'Giuseppe Covino',
    secondName: 'Ifa Muyuwa',
    title: 'Alakiji',
    highlightTitle: false,
    description: 'Babalawo con ? años de trayectoria',
    detailedDescription: (
      <>
        Ha jugado un papel clave en la formación de nuevos iniciados. <br />
        Como Alakiji es responsable de los toques y ritmos en las ceremonias. 
        Maneja los tambores y otros instrumentos de percusión, creando la 
        atmósfera musical necesaria para los rituales. Su conocimiento de 
        los ritmos y cantos tradicionales es crucial para la correcta ejecución 
        de las ceremonias y para invocar a los Orishas. <br /><br />
        <strong>Experiencia: </strong> 5 años de experiencia en la realización de ebós y rituales para Ifá y Orishas. <br /><br />
        <strong>Logros: </strong> Desde mi iniciación en Ifá el cambio en mi vida ha sido gratificante y desde el momento en que comencé como Babalawo practicante el crecimiento ha sido exponencial. He logrado tener estabilidad económica, familiar, tranquilidad y mucha paz interior.
      </>
    ),
    image: muyuwa
  },
  {
    name: 'Nelson Mendoza',
    secondName: '',
    title: 'Ojugbona',
    highlightTitle: false,
    description: 'Babalawo con 17 años de trayectoria',
    detailedDescription: (
      <>
        Ha servido como mentor para muchos jóvenes Babalawos.<br />
        El Ojugbona es el miembro más antiguo y sabio del concilio. 
        Su experiencia y conocimiento profundo de las tradiciones 
        yoruba le permiten actuar como consejero principal. Participa 
        en la formación de nuevos sacerdotes y en la guía espiritual 
        de los miembros del Ilé. Su palabra es altamente respetada 
        en asuntos de espiritualidad y conducta.<br /><br />
        <strong>Experiencia:</strong> 5 años de experiencia en la realización de ebós 
        y rituales para Ifá y Orishas. <br /><br />
        <strong>Logros:</strong> Desde mi iniciación en Ifá el cambio en mi vida 
        ha sido gratificante y desde el momento en que comencé como Babalawo 
        practicante el crecimiento ha sido exponencial. He logrado tener estabilidad 
        económica, familiar, tranquilidad y mucha paz interior.
      </>
    ),
    image: ojugbona
  },
  {
    name: 'Cesar Hung',
    secondName: '',
    title: 'Surepawo',
    highlightTitle: false,
    description: 'Babalawo con ? años de trayectoria',
    detailedDescription: (
      <>
        El Surepawo maneja las finanzas del Ilé, incluyendo la administración 
        de los fondos, los pagos y las compras necesarias para el mantenimiento 
        del templo y las ceremonias. Es responsable de la transparencia y la 
        rendición de cuentas en todos los aspectos financieros, asegurando 
        que los recursos se utilicen de manera adecuada y justa.
      </>
    ),
    image: surepawo
  },
  {
    name: 'Heinar Hernandez',
    secondName: '',
    title: 'Balogun',
    highlightTitle: true,
    highlightedTitleContent: 'Gege Ogboni',
    description: 'Babalawo con ? años de trayectoria',
    detailedDescription: (
      <>
        El Balogun es el líder militar de la comunidad, encargado de la defensa 
        y la protección del Ilé. Mantiene la unidad y el respeto entre los 
        miembros, asegurando que se respeten las leyes y normas internas. 
        También puede liderar iniciativas comunitarias y participar en la resolución de conflictos.
      </>
    ),
    image: balogun
  },
  {
    name: 'Andres García',
    secondName: 'Ogun korede',
    title: 'Agunsin',
    highlightTitle: false,
    description: 'Babalawo con 6 años de trayectoria',
    detailedDescription: (
      <>
        Como Agunsin es responsable de cuidar y mantener los objetos sagrados y 
        las herramientas rituales del Ilé. Esto incluye la limpieza, consagración 
        y almacenamiento seguro de estos artículos. Su rol es esencial para 
        garantizar que los objetos sagrados se mantengan en buen estado y 
        listos para su uso en las ceremonias. <br /><br />
        <strong>Experiencias: </strong>He aprendido mucho sobre 
        la importancia de Ifá en nuestras vidas. Ifá ha sido como un faro en mi vida. 
        Me ha guiado en los momentos difíciles y me ha dado la fuerza para seguir adelante.
        Ifá me ha ayudado a ser una mejor persona. He aprendido a ser más paciente, compasivo 
        y comprensivo. También he aprendido a valorar más a mi familia y a mis amigos. <br /><br />
        <strong>Logros: </strong> Mi mayor logro ha sido llegar a mi Egbe. El Egbe es una 
        familia espiritual que me ha brindado apoyo y orientación en mi camino espiritual. 
        Gracias al Egbe, he podido crecer como Babalawo y alcanzar mi máximo potencial.
        Gracias al Egbe, he podido mejorar día tras día y alcanzar mi máximo potencial. 
        También estoy agradecido por la estabilidad espiritual que me ha brindado Ifá. 
        Ifá me ha dado la paz y la tranquilidad que necesitaba para vivir una vida plena y satisfactoria.
        He sido un sacerdote activo y comprometido con la religión de Ifá durante más de 6 años.
        He trabajado para promover la comprensión y el respeto por la religión de Ifá en su comunidad.
        He sido un mentor para otros estudiantes de Ifá.
      </>
    ),
    image: agunsin
  },
  {
    name: 'Humberto Sifontes',
    secondName: 'Efuntade',
    title: 'Sokinloju',
    highlightTitle: false,
    description: 'Babalawo con 11 años de trayectoria',
    detailedDescription: (
      <>
        Como Sokinloju supervisa las obras y actividades del concilio, asegurándose 
        de que todo se lleve a cabo de acuerdo con los estándares y las tradiciones 
        del Ilé. Su función incluye la evaluación de los preparativos para las 
        ceremonias y la supervisión de los rituales para asegurar su correcta ejecución. <br /><br />
        <strong>Experiencia: </strong> Con 11 años de consagrado como Babalawo, participé 
        en varios festivales y consagraciones. En su momento realicé cantidades de ebo riru 
        y adimu tanto para integrantes del egbe como para personas que en su momento 
        llegaron por consultas y orientación. <br /><br />
        <strong>Logros: </strong> Gracias a Ifá, el Egbe y la orientación del Oluwo, 
        he cambiado como persona. Es mi principal logro. Mi enfoque fue dirigido hacia 
        el cambio de carácter y actitud. La filosofía yoruba me atrapó desde los primeros 
        días que llegué a los pies de Ifá, la cual he incorporado a mi vida.
      </>
    ),
    image: sokinloju
  },
  {
    name: 'Pedro Sifontes',
    secondName: 'Ifa Tokun',
    title: 'Asiwaju',
    highlightTitle: true,
    highlightedTitleContent: 'Gege Ogboni',
    description: 'Babalawo con 12 años de trayectoria',
    detailedDescription: (
      <>
        El Asiwaju es un líder dentro de la comunidad, encargado de guiar a 
        los miembros en sus actividades diarias y espirituales. Mantiene la 
        unidad y el respeto, actuando como mediador en conflictos y facilitando 
        la comunicación entre los miembros del Ilé. Su liderazgo es crucial 
        para la cohesión social y espiritual de la comunidad. <br /><br />
        <strong>Experiencias: </strong> <br />
        2012: Me consagré como Babalawo en la línea afrocubana, siguiendo los preceptos de Ifá. <br />
        2013: Conocí a Guillermo Vega Ifa Lola Akinwande, quien se convirtió en mi Baba Ifa y me enseñó mucho sobre Ifá. <br />
        2017: Realicé la homologación en la línea de Ifa tradicional, lo que me permitió profundizar en mi conocimiento de Ifá. <br />
        2019: Me consagré como Ogboni con el título de Gege en Abeokuta, África, de la mano del Araba Ifa Tope Akinwande. <br /><br />
        <strong>Logros: </strong> Más de 10 años de servicio activo y 
        comprometido con la religión de Ifá. Trabajo continuo para promover 
        la comprensión y el respeto por la religión de Ifá en mi comunidad.
        Mentor de otros estudiantes de Ifá. <br />
        «Me siento muy orgulloso de ser un sacerdote de Ifá. A través de Ifá he conseguido 
        la paciencia, el enfoque y la alineación que necesitaba para saber llevar un buen 
        destino. Estoy agradecido por la oportunidad de servir a la comunidad y ayudar a 
        otros a conocer y comprender la religión de Ifá.»
      </>
    ),
    image: asiwaju
  },
  {
    name: 'Vacio',
    secondName: 'Vacio',
    title: 'Awise',
    highlightTitle: false,
    description: 'Vacio',
    detailedDescription: (
      <>
        El Awise es el encargado de las normas y reglas del concilio. 
        Actúa como consejero, ofreciendo sabiduría y orientación en 
        asuntos tanto espirituales como cotidianos. Su rol incluye 
        la interpretación de las enseñanzas de Ifá y la aplicación 
        de estas en la vida diaria de los miembros del Ilé.
      </>
    ),
    image: vacio
  },
  {
    name: 'Vacio',
    secondName: 'Vacio',
    title: 'Erinmi',
    highlightTitle: false,
    description: 'Vacio',
    detailedDescription: (
      <>
        El Erinmi preserva los registros y la historia del concilio, 
        similar al Aseda. Su enfoque es mantener la continuidad histórica, 
        documentando los eventos significativos y asegurando que la memoria 
        colectiva de la comunidad se mantenga intacta. Esto incluye la 
        recopilación de relatos orales y la escritura de crónicas.
      </>
    ),
    image: vacio
  },
  {
    name: 'Vacio',
    secondName: 'Vacio',
    title: 'Alara',
    highlightTitle: false,
    description: 'Vacio',
    detailedDescription: (
      <>
        El Alara es el líder de los cantos y los aspectos musicales en 
        las ceremonias. Su responsabilidad incluye dirigir los coros, 
        seleccionar las canciones apropiadas para cada ritual y enseñar 
        los cantos a los demás miembros. La música es una parte integral 
        de las ceremonias yoruba, y el Alara juega un papel crucial en su ejecución.
      </>
    ),
    image: vacio
  },
  {
    name: 'Pedro Carrion',
    secondName: '?',
    title: 'Elemo',
    highlightTitle: false,
    description: 'Babalawo con 17 años de trayectoria',
    detailedDescription: (
      <>
        El Elemo es responsable de la seguridad y la protección espiritual 
        del Ilé. Esto incluye la vigilancia durante las ceremonias y la 
        implementación de medidas para proteger a la comunidad de influencias 
        negativas. Su rol es esencial para mantener un entorno seguro y sagrado.
      </>
    ),
    image: pedroCarrion
  },
];

const Concile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const openModal = (character) => {
    setSelectedCharacter(character);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <section className="concilio section-padding" id="concilio">
        <div className="container miniSectionServices">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header  pb-5">
                <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <h2 className='text-center pb-5'>Concilio Ifa</h2>
                </motion.div>
                <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                  <p className='text-left'>
                    El concilio de un Ilé en la religión yoruba, se compone de una estructura jerárquica que incluye 16 roles clave, 
                    cada uno con responsabilidades específicas que aseguran el funcionamiento armonioso y 
                    la preservación de las tradiciones espirituales y culturales del grupo. Este concilio 
                    está liderado por el Oluwo, el líder principal y más experimentado, quien tiene la 
                    autoridad suprema en todas las decisiones importantes y dirige las ceremonias esenciales. 
                    El egbe iwori Aweda se rige bajo el linaje Akinwande con base en Nigeria particularmente 
                    en la región de Abeokuta <br /> <br />
                    <strong>Funciones de los 16 Mayores</strong><br /><br />
                    <strong>Adivinación y Consultas: </strong> Realizan consultas de Ifá para individuos 
                    y la comunidad, usando el sistema de adivinación Ifá.<br />
                    <strong>Resolución de Conflictos: </strong> Actúan como mediadores y jueces en disputas 
                    dentro de la comunidad.<br />
                    <strong>Guía Espiritual: </strong> Proporcionan orientación espiritual y ayudan en la 
                    interpretación de mensajes divinos.<br />
                    <strong>Enseñanza y Formación: </strong> Transmiten conocimientos a los nuevos iniciados 
                    y aseguran la continuidad de las tradiciones yorubas.<br />
                    <strong>Ceremonias y Rituales: </strong> Dirigen y supervisan los rituales importantes, 
                    asegurando que se realicen correctamente.<br />
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="row">
          {characterData.map((character, index) => (
              <motion.div key={index} className="col-12 col-md-6 col-lg-3 cardHover" variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
                <div className="card text-left cardShadow intentoCard3" onClick={() => openModal(character)}>
                  <div className="card-body">
                    <img alt={character.name} className="img-fluid rounded-circle" src={character.image} />
                    <h3 className="card-title py-2">{character.name}</h3>
                    <span className="yellow">{character.title}</span>
                    {character.highlightTitle && character.highlightedTitleContent && (
                      <span className="red"> {character.highlightedTitleContent}</span>
                    )}
                    <p className="card-text">{character.description}</p>
                    <p className="socials text-center">
                      <i className="bi bi-twitter mx-1"></i> 
                      <i className="bi bi-facebook mx-1"></i> 
                      <i className="bi bi-whatsapp mx-1"></i> 
                      <i className="bi bi-instagram mx-1"></i>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Character Details"
          className="Modal"
          overlayClassName="Overlay"
        >
          {selectedCharacter && (
            <div className="modal-content">
              <button onClick={closeModal} className="close-button">X</button>
              <div className="modal-body">
                <h3>{selectedCharacter.name}</h3>
                <h5><b>Nombre de Ifa</b>: {selectedCharacter.secondName}</h5>
                <h5><b>Cargo en el concilio:</b> {selectedCharacter.title}</h5>
                <p>{selectedCharacter.detailedDescription}</p>
              </div>
            </div>
          )}
        </Modal>
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
        <div className='container miniSectionServices'>
          <div className="row gy-5 pb-5 pt-5" style={{ perspective: 360 }}>
            <motion.div variants={fadeIn('backward', 0.2)} initial='hidden' whileInView='show' exit='hidden'  layoutScroll>
              <p className="text-center">
                A través de su experiencia, conocimiento y contribuciones significativas, estos líderes 
                y figuras importantes han enriquecido la vida de nuestra comunidad y han sido parte fundamental 
                en el crecimiento continuo de Egbe Iwory Aweda. Su guía espiritual y compromiso con la 
                tradición yoruba han dejado un legado valioso para las generaciones presentes y futuras. <br />
                A través de nuestra asistencia, estamos listos para extender una mano amiga a todo aquel que lo 
                necesita. Nuestra pasión y compromiso en Egbe Iwory Aweda radican en ser guías en tu viaje 
                espiritual, brindándote herramientas y conocimiento para que puedas enfrentar los desafíos con 
                confianza y claridad. <br />
                Contactanos para saber mas como podemos guiarte!
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
      <motion.div className="fondoLateral5" variants={fadeIn('up', 0.4)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
        <img src={FondoIzquierdo} alt="ikin" />
      </motion.div>
      <motion.div className="fondoLateral3" variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
        <img src={FondoSuperior} alt="ide" />
      </motion.div>
    </>
  );
};

export default Concile;
