import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Aje from '../images/orisaAje.jpg'
import Ogun from '../images/ogun.jpg'


const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const Fetivales = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [error, setError] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    axios.get('https://humbertosifontes.github.io/JSON-Egbe/imagenes.json')
      .then(response => setAlbums(response.data.albums))
      .catch(error => {
        console.error('Error fetching albums:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div className="container">Error al cargar albums: {error.message}</div>;
  }

  const handleAlbumClick = (albumId) => {
    setSelectedAlbum(albums.find(album => album.id === albumId));
    setSelectedYear(null);
  };

  const handleBackToAlbumsClick = () => {
    setSelectedAlbum(null);
    setSelectedYear(null);
  };

  const handleBackToYearsClick = () => {
    setSelectedYear(null);
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const openModal = (photo) => {
    if (size.width > 769) {
      setSelectedPhoto(photo);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalIsOpen(false);
  };

  if (selectedAlbum && selectedYear) {
    const photos = selectedAlbum.fotosPorAño[selectedYear].map(photo => ({
      src: `https://humbertosifontes.github.io/JSON-Egbe/${photo.ruta}`,
      alt: photo.name,
      key: photo.id,
    }));

    return (
      <div className="container">
        <button className="btn btn-success text-white my-4" onClick={handleBackToYearsClick}>Volver</button>
        <div className="mb-4">
          <h2 className="text-center my-4">{selectedAlbum.name} - {selectedYear}</h2>
          <div className="grid-container">
            {photos.map(photo => (
              <div className="grid-item" key={photo.key} onClick={() => openModal(photo)}>
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Photo Details"
          className="ModalImg"
          overlayClassName="Overlay"
        >
          {selectedPhoto && (
            <div className="modal-content">
              <button onClick={closeModal} className="close-button">X</button>
              <div className="modal-body">
                <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="modal-image" />
              </div>
            </div>
          )}
        </Modal>
      </div>
    );
  }

  if (selectedAlbum) {
    return (
      <div className="container">
        <button className="btn btn-success text-white my-4" onClick={handleBackToAlbumsClick}>Volver</button>
        <div className="mb-4">
          <h2 className="text-center my-4">{selectedAlbum.name}</h2>
          <div className="row">
            {Object.keys(selectedAlbum.fotosPorAño).map(year => (
              <div key={year} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card cardAlbums" onClick={() => handleYearClick(year)}>
                  <img className="card-img-top card-img-topAlbums" src={`https://humbertosifontes.github.io/JSON-Egbe/${selectedAlbum.fotosPorAño[year][0].ruta}`} alt={year} />
                  <div className="card-body card-bodyAlbums">
                    <h5 className="card-title">{year}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    
        <div className="row rowFestivales">
          <div>
            <h3 className='text-center mb-5'>Festivales</h3>
            <p className='text-left mb-5'>
              El Egbe Iwori Aweda, con un profundo respeto y devoción a las tradiciones 
              ancestrales, ha logrado consolidar una serie de festivales dedicados a los 
              Orisa Esu y Olokun, marcando hitos significativos en su trayectoria. Estos 
              eventos no solo han fortalecido la fe y el compromiso de sus integrantes, 
              sino que también han creado un espacio de unión y celebración comunitaria. <br />
              A continuación, se presenta una reseña de los logros alcanzados por el Egbe 
              en la organización de estos festivales a lo largo de los años. <br /><br />

              <b>2014: </b>El Primer Festival de Olokun en Carúpano. En el año 2014, el Egbe 
              Iwori Aweda decidió rendir homenaje a Olokun, el Orisa del mar y de las profundidades 
              del océano, con un festival en la costa venezolana de Carúpano. Este evento marcó 
              el inicio de una tradición anual que ha perdurado hasta la actualidad.<br />
              La elección de Carúpano, con su rica historia marítima y sus impresionantes 
              paisajes costeros, fue un acierto que permitió conectar de manera profunda 
              con la energía de Olokun. Los integrantes del Egbe viajaron juntos, fortaleciendo 
              los lazos de fraternidad y colaboración. <br /> La logística del evento fue impecable: 
              desde la organización del transporte hasta la coordinación de las actividades rituales y culturales.<br />
              Durante el festival, se llevaron a cabo ceremonias de invocación y ofrendas en honor 
              a Olokun, así como talleres y charlas que promovieron el conocimiento y la apreciación 
              de las tradiciones Yoruba. <br /> Este evento no solo consolidó la devoción hacia Olokun, 
              sino que también fortaleció la identidad y el propósito del Egbe, marcando el comienzo 
              de una tradición que se celebraría anualmente.<br /><br />

              <b>2015: </b>El Festival de Baba Esu en Puerto Ordaz. El éxito del festival de Olokun 
              inspiró al Egbe a continuar con la organización de eventos similares. En 2015, se 
              decidió honrar a Baba Esu, el mensajero divino y guardián de los caminos, con un 
              festival en la ciudad de origen del Egbe, Puerto Ordaz.
              Este evento tuvo un carácter especial, ya que se llevó a cabo en el lugar que vio nacer 
              al Egbe. <br /> La comunidad local, tanto los integrantes del Egbe como personas externas, 
              participaron activamente, creando un ambiente de armonía y celebración. La dinámica 
              familiar y comunitaria fue uno de los aspectos más destacados del festival, fomentando 
              la inclusión y el entendimiento mutuo.<br />
              Las ceremonias dedicadas a Baba Esu incluyeron ofrendas, cantos y danzas tradicionales, 
              que resonaron en los corazones de todos los presentes. Además, se organizaron actividades 
              educativas y culturales que permitieron a los asistentes profundizar en el conocimiento 
              de las enseñanzas de Ifá y la importancia de Baba Esu en la cosmovisión Yoruba.<br /><br />

              A lo largo de los años, el Egbe Iwori Aweda ha demostrado un compromiso inquebrantable 
              con la preservación y promoción de sus tradiciones. Los festivales dedicados a Olokun y 
              Baba Esu no solo han sido eventos de devoción y celebración, sino también oportunidades 
              para fortalecer la unidad y el espíritu comunitario.
              Cada año, los integrantes del Egbe trabajan con esmero y dedicación para asegurar el éxito 
              de estos festivales, adaptándose a los desafíos logísticos y manteniendo viva la llama de 
              la tradición. Estos eventos han permitido que las enseñanzas de Ifá se transmitan de generación 
              en generación, enriqueciendo la vida espiritual y cultural de todos los participantes.
              El Egbe Iwori Aweda seguirá adelante con su misión de honrar a los Orisa, promoviendo 
              el conocimiento y la práctica de las tradiciones ancestrales. Los festivales de Olokun y 
              Baba Esu continuarán siendo un pilar fundamental en esta labor, celebrando la riqueza y 
              la diversidad de la espiritualidad Yoruba.<br /><br />

              Con cada festival, el Egbe reafirma su compromiso con la herencia cultural y espiritual 
              que los une, celebrando la vida, la fe y la comunidad en un hermoso ciclo de devoción y renovación.
            </p>
          </div>
          <div>
            <h3 className='text-center'>Albumes de Fotos</h3>
          </div>
          {albums.map(album => (
            <div key={album.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card cardAlbums" onClick={() => handleAlbumClick(album.id)}>
                <img className="card-img-top card-img-topAlbums" src={`https://humbertosifontes.github.io/JSON-Egbe/${album.fotosPorAño[Object.keys(album.fotosPorAño)[1]][0].ruta}`} alt={album.name} />
                <div className="card-body card-bodyAlbums">
                  <h5 className="card-title"><b>{album.name}</b></h5>
                </div>
              </div>
            </div>
          ))}
          <div className='mt-5'>
            <h3>Proximamente</h3>
            <p className='text-left'>
              En 2024, el Egbe Iwori Aweda continúa su rica tradición de honrar 
              a los Orisa con la organización de festivales dedicados a Orisa Aje y Ogun. 
              Estos eventos representan no solo una celebración de la espiritualidad 
              Yoruba, sino también una reafirmación del compromiso del Egbe con sus 
              creencias y prácticas ancestrales.
            </p>
            <div className="container miniSectionServices">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-12 img-sobre">
                  <div className="about-img">
                    <img
                      src={Aje}
                      alt={'Nosotros'}
                      id={"about-image"}
                      className={"img-fluid"}
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
                  <div className="about-text">
                    <h3>El Festival de Orisa Aje</h3>
                    <p>
                      Este año, el Egbe ha decidido rendir homenaje a Orisa Aje, la deidad de la 
                      riqueza y la prosperidad. Reconociendo la importancia de la abundancia 
                      material y espiritual, el festival de Aje será un evento donde se celebrará 
                      la prosperidad en todas sus formas.
                      El festival de Aje se llevará a cabo en un entorno que refleje la riqueza 
                      natural y cultural de nuestra comunidad, promoviendo un ambiente de agradecimiento 
                      y esperanza. Las ceremonias incluirán ofrendas y rituales que buscan atraer la 
                      prosperidad y la buena fortuna para todos los miembros del Egbe y la comunidad en 
                      general. Además, se organizarán talleres sobre el manejo de recursos y la creación 
                      de prosperidad sostenible, integrando así las enseñanzas tradicionales de Ifá con 
                      prácticas contemporáneas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container miniSectionServices">
              <div className="row">
                <div className="col-lg-8 col-md-12 col-12 ps-lg-5 textoSobre">
                  <div className="about-text">
                    <h3>El Festival de Ogun</h3>
                    <p>
                      Además, el Egbe ha decidido celebrar a Ogun, el Orisa del hierro y la guerra, 
                      conocido por su valentía, fuerza y laboriosidad. Este festival se llevará a cabo 
                      en un entorno que resalte el poder y la energía de Ogun, subrayando la importancia 
                      de la fortaleza y la perseverancia en nuestras vidas.
                      El festival de Ogun incluirá ceremonias rituales con ofrendas y danzas guerreras, 
                      destacando el valor y la resistencia. También se realizarán actividades comunitarias 
                      enfocadas en la construcción y el trabajo manual, simbolizando la conexión de Ogun con 
                      la creación y la transformación. Charlas y talleres sobre la importancia de la fortaleza 
                      interna y la resiliencia serán parte integral del festival, ofreciendo a los participantes 
                      la oportunidad de reflexionar sobre cómo canalizar la energía de Ogun en sus propias vidas.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12 img-sobre">
                  <div className="about-img">
                    <img
                      src={Ogun}
                      alt={'Nosotros'}
                      id={"about-image"}
                      className={"img-fluid"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p>
              La organización de estos festivales es un testimonio del compromiso continuo del Egbe Iwori Aweda 
              con la celebración y preservación de sus tradiciones. A través de estos eventos, el Egbe no 
              solo honra a los Orisa, sino que también fortalece los lazos comunitarios y fomenta un profundo 
              sentido de pertenencia y propósito.
              En 2024, el Egbe de Ifá Yoruba reafirma su dedicación a las enseñanzas de Ifá y a la celebración 
              de la vida en todas sus dimensiones. Los festivales de Aje y Ogun no solo enriquecerán la vida 
              espiritual de sus participantes, sino que también promoverán valores esenciales como la prosperidad, 
              la fortaleza y la comunidad. <br /><br />
              Con cada año que pasa, el Egbe de Ifá Yoruba continúa su viaje de devoción y renovación, celebrando 
              la riqueza de la espiritualidad Yoruba y su impacto positivo en la vida de todos los que forman 
              parte de esta tradición sagrada. Los festivales de este año prometen ser un testimonio vibrante de 
              esta continuidad y crecimiento, invitando a todos a participar y compartir en la celebración de 
              Orisa Aje y Ogun.
            </p>
          </div>
        </div>
    </>
  );
};

export default Fetivales;
