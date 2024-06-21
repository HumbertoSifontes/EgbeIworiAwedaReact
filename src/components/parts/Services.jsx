import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <section className="section-padding" id="servicios">
                <div className="container miniSectionServices">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header text-center pb-5">
                                <h2 className='pb-5'>Desempeño</h2>
                                <p>
                                    En el Egbe Iwori Aweda, ofrecemos una variedad de servicios 
                                    espirituales de la religión Yoruba, desde consultas de adivinación 
                                    y ceremonias de Esentaye, hasta iniciaciones en Ifá, ofrendas 
                                    a los Orisa y limpiezas espirituales. Sumérgete en una experiencia 
                                    transformadora y conecta con nuestras tradiciones ancestrales. 
                                    Embarcarte en un viaje espiritual que transformará tu vida, te 
                                    invitamos a conocer más sobre nuestros servicios. Descubre cómo 
                                    nuestras ceremonias y rituales pueden ayudarte a encontrar la paz 
                                    y el propósito que buscas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-3">
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-center bg-dark pb-2 intentoCard">
                                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                                    <div className="row mb-3 gradientText">
                                        <i className="bi bi-chat"></i>
                                        <h3 className="card-title">Consultas (idafa)</h3>
                                    </div>
                                    <div className="row mb-3 flex-grow-1 align-items-center">
                                        <p className="lead text-white">
                                        Realizamos consutas tanto con Opele (cadena de adivinacion) o ikines (semillas de ifa). <br />
                                        Las consultas pueden ser presenciales o por videollamadas.
                                        </p>
                                    </div>
                                    <div className="row mb-3">
                                        <Link className="btn btn-success text-white" to={'/servicios'}>Conoce mas</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-white text-center bg-dark pb-2 intentoCard">
                                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                                    <div className="row mb-3 gradientText">
                                        <i className="bi bi-award"></i>
                                        <h3 className="card-title">Consagraciones</h3>
                                    </div>
                                    <div className="row mb-3 flex-grow-1 align-items-center">
                                        <p className="lead text-white">
                                        - Itelodu (Ceremonias de Babalawo o Iyanifa) con la cual se conoce el destino en la tierra. <br />
                                        - Isefa (ceremonia de iniciacion dentro de ifa) con la cual se recibe ciertas deidades y una guia de vida.
                                        </p>
                                    </div>
                                    <div className="row mb-3">
                                        <Link className="btn btn-success text-white" to={'/servicios'}>Conoce mas</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-center bg-dark pb-2 intentoCard">
                                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                                    <div className="row mb-3 gradientText">
                                        <i className="bi bi-shield"></i>
                                        <h3 className="card-title">Adimu</h3>
                                    </div>
                                    <div className="row mb-3 flex-grow-1 align-items-center">
                                        <p className="lead text-white">
                                            Ofrecimiento especifico de acuerdo al Orisa <br />
                                            odu o consagracion.
                                        </p>
                                    </div>
                                    <div className="row mb-3">
                                        <Link className="btn btn-success text-white" to={'/servicios'}>Conoce mas</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-12">
                            <div className="section-header text-center pb-5">
                                <p className='pb-5'>
                                    En el Egbe Iwori Aweda, te ofrecemos una experiencia transformadora 
                                    a través de nuestras ceremonias y servicios espirituales. Ya sea que 
                                    busques orientación a través de una consulta de adivinación (Idafa), 
                                    desees iniciar un nuevo capítulo a tu bebe con una ceremonia de Esentaye, 
                                    recibir la protección de tu Orisha en una entrega de Orisa, o profundizar 
                                    tu conexión espiritual mediante la iniciación en Ifá (Itefa) o Isefa, 
                                    estamos aquí para guiarte en tu camino.
                                </p>
                                <a className='ctaText' href="#contact"><h1 className='pb-2 ctaText'>¡Agenda una Cita Hoy Mismo!</h1></a>
                                <div className="d-flex justify-content-center">
                                    <a href="#contact"><div className="flecha"></div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services