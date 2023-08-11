import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <section className="section-padding" id="servicios">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Desempeño</h2>
                        </div>
                    </div>
                    <div className="row responsiveQuienes">
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-white text-center bg-dark pb-2" id="cajaServicio">
                                <div className="card-body">
                                    <i className="bi bi-chat"></i>
                                    <h3 className="card-title">Consultas (idafa)</h3>
                                    <p className="lead">
                                        Realizamos consutas tanto con Opele (cadena de adivinacion) o ikines (semillas de ifa). <br/>
                                            Las consultas pueden ser presenciales o por videollamadas.
                                    </p>
                                    <Link className="btn btn-success text-white" to={'/desempeño'}>Conoce mas</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-white text-center bg-dark pb-2" id="cajaServicio">
                                <div className="card-body">
                                    <i className="bi bi-award"></i>
                                    <h3 className="card-title">Consagraciones</h3>
                                    <p className="lead">
                                        - Itelodu (Ceremonias de Babalawo o Iyanifa) con la cual se conoce el destino en la tierra <br/>
                                            - Isefa (ceremonia de iniciacion dentro de ifa) con la cual se recibe ciertas deidades y una guia de vida
                                    </p>
                                    <Link className="btn btn-success text-white" to={'/desempeño'}>Conoce mas</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-white text-center bg-dark pb-2" id="cajaServicio">
                                <div className="card-body">
                                    <i className="bi bi-shield"></i>
                                    <h3 className="card-title">Adimu</h3>
                                    <p class="lead">
                                        Ofrecimiento especifico de acuerdo al Orisa <br/>
                                            odu o consagracion.
                                    </p>
                                    <Link className="btn btn-success text-white" to={'/desempeño'}>Conoce mas</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="about-img">
                            <img
                                src="imagenes/mision.jpg"
                                alt=""
                                id="about-image"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default Services