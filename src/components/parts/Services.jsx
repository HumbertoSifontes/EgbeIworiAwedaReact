import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/variants';

const Services = () => {
    return (
        <>
            <section className="section-padding" id="servicios">
                <div className="container miniSectionServices">
                    {/* Sección de encabezado */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header text-center pb-5">
                                <motion.div 
                                    variants={fadeIn('right', 0.2)} 
                                    initial="hidden" 
                                    whileInView="show" 
                                    exit="hidden"  
                                    viewport={{ once: true }} 
                                    layoutScroll
                                >
                                    <h2 className="pb-5">Desempeño</h2>
                                </motion.div>
                                <motion.div 
                                    variants={fadeIn('left', 0.2)} 
                                    initial="hidden" 
                                    whileInView="show" 
                                    exit="hidden"  
                                    viewport={{ once: true }} 
                                    layoutScroll
                                >
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
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Sección de tarjetas de servicios */}
                    <div className="row gy-3">
                        <motion.div 
                            className="col-12 col-md-12 col-lg-4" 
                            variants={fadeIn('up', 0.2)} 
                            initial="hidden" 
                            whileInView="show" 
                            exit="hidden"  
                            viewport={{ once: true }} 
                            layoutScroll
                        >
                            <div className="card text-center pb-2 intentoCard">
                                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                                    <div className="row mb-3 gradientText">
                                        <i className="bi bi-chat" aria-hidden="true"></i>
                                        <h3 className="card-title">Consultas (idafa)</h3>
                                    </div>
                                    <div className="row mb-3 flex-grow-1 align-items-center">
                                        <p className="lead text-white">
                                            Realizamos consultas tanto con Opele (cadena de adivinación) o ikines (semillas de Ifa). <br />
                                            Las consultas pueden ser presenciales o por videollamadas.
                                        </p>
                                    </div>
                                    <div className="row mb-3">
                                        <Link className="btn btn-success text-white" to="/servicios">Conoce más</Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="col-12 col-md-12 col-lg-4" 
                            variants={fadeIn('up', 0.4)} 
                            initial="hidden" 
                            whileInView="show" 
                            exit="hidden"  
                            viewport={{ once: true }} 
                            layoutScroll
                        >
                            <div className="card text-white text-center pb-2 intentoCard">
                                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                                    <div className="row mb-3 gradientText">
                                        <i className="bi bi-award" aria-hidden="true"></i>
                                        <h3 className="card-title">Consagraciones</h3>
                                    </div>
                                    <div className="row mb-3 flex-grow-1 align-items-center">
                                        <p className="lead text-white">
                                            - Itelodu (Ceremonias de Babalawo o Iyanifa) con la cual se conoce el destino en la tierra. <br />
                                            - Isefa (ceremonia de iniciación dentro de Ifa) con la cual se recibe ciertas deidades y una guía de vida.
                                        </p>
                                    </div>
                                    <div className="row mb-3">
                                        <Link className="btn btn-success text-white" to="/servicios">Conoce más</Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="col-12 col-md-12 col-lg-4" 
                            variants={fadeIn('up', 0.6)} 
                            initial="hidden" 
                            whileInView="show" 
                            exit="hidden"  
                            viewport={{ once: true }} 
                            layoutScroll
                        >
                            <div className="card text-center pb-2 intentoCard">
                                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                                    <div className="row mb-3 gradientText">
                                        <i className="bi bi-shield" aria-hidden="true"></i>
                                        <h3 className="card-title">Adimu</h3>
                                    </div>
                                    <div className="row mb-3 flex-grow-1 align-items-center">
                                        <p className="lead text-white">
                                            Ofrecimiento específico de acuerdo al Orisa, odu o consagración.
                                        </p>
                                    </div>
                                    <div className="row mb-3">
                                        <Link className="btn btn-success text-white" to="/servicios">Conoce más</Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sección de llamada a la acción */}
                    <div className="row pt-5">
                        <div className="col-md-12">
                            <div className="section-header text-center pb-5">
                                <p className="pb-5">
                                    En el Egbe Iwori Aweda, te ofrecemos una experiencia transformadora 
                                    a través de nuestras ceremonias y servicios espirituales. Ya sea que 
                                    busques orientación a través de una consulta de adivinación (Idafa), 
                                    desees iniciar un nuevo capítulo a tu bebe con una ceremonia de Esentaye, 
                                    recibir la protección de tu Orisha en una entrega de Orisa, o profundizar 
                                    tu conexión espiritual mediante la iniciación en Ifá (Itefa) o Isefa, 
                                    estamos aquí para guiarte en tu camino.
                                </p>
                                <div style={{ perspective: 360 }}>
                                    <motion.div 
                                        variants={fadeIn('backward', 0.1)} 
                                        initial="hidden" 
                                        whileInView="show" 
                                        exit="hidden"  
                                        layoutScroll
                                    >
                                        <a className="ctaText" href="#contact">
                                            <h1 className="pb-2 ctaText">¡Agenda una Cita Hoy Mismo!</h1>
                                        </a>
                                    </motion.div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <a href="#contact">
                                        <div className="flecha"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;
