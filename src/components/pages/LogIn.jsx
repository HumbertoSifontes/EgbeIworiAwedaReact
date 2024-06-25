import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn } from '../../animations/variants';
import ParticlesBackground from '../../animations/Particles/particlesBackground';

const LogIn = () => {
    return (
        <section className="login container-fluid d-flex justify-content-center align-items-center vh-100" id="login">
            <ParticlesBackground />
            <div className='containerForm p-4 rounded'>
                <div className="loginform">
                    <div className="row">
                        <div className="col-12">
                            <motion.div className="section-header text-center pb-3" variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'>
                                <h2>Ingresa</h2>
                            </motion.div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <motion.div className="mb-3" variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden'>
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Usuario</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </motion.div>
                                <motion.div className="mb-3" variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'>
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </motion.div>
                                <motion.div className="mb-3 form-check" variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Recuérdame</label>
                                </motion.div>
                                <motion.div variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden'>
                                    <p className="botonConcilio text-center">
                                        <input className="enviar btn btn-success d-grid gap-2 col-6 mx-auto text-white" type="submit" value="Enviar"/>
                                    </p>
                                    <p className='text-center'>
                                        <Link to="/register">¿No tienes cuenta?</Link>
                                    </p>
                                </motion.div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogIn;
