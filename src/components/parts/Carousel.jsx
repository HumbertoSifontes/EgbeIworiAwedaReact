import React from 'react'
import egbe from '../images/egbe.jpg'
import ceremonias from '../images/ceremonias.jpg'
import ose from '../images/ose.jpg'

const Carrusel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={egbe} className={'d-block w-100'} alt={'Egbe'} />
        <div className="carousel-caption d-none d-md-block">
            <h5>Egbe Iwori Aweda</h5>
            <p>Hermanos de Alma practicante de Ifa Tradicional</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={ceremonias} className={'d-block w-100'} alt={'Egbe'} />
        <div className="carousel-caption d-none d-md-block">
            <h5>Ceremonias</h5>
            <p>Cada hermano busca como elevarse espiritualmente</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={ose} className={'d-block w-100'} alt={'Egbe'} />
        <div className="carousel-caption d-none d-md-block">
            <h5>OseItaDOgun</h5>
            <p>Ceremonia de limpieza astral del Egbe cada 17 dias</p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carrusel