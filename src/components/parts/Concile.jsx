import React from 'react'
import oluwo from '../images/oluwo.jpg'
import aseda from '../images/aseda.jpg'
import akoda from '../images/akoda.jpg'
import ojugbona from '../images/ojugbona.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from '../../animations/variants'

const Concile = () => {
  return (
    <section className="concilio section-padding" id="concilio">
		<div className="container miniSectionServices">
			<div className="row">
				<div className="col-md-12">
					<div className="section-header text-center pb-5">
						<motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
							<h2 className='pb-5'>Concilio Ifa</h2>
						</motion.div>
						<motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
							<p>Nuestro Egbe Iwori Aweda obedece a una estructura jerárquica 
								de un Concilio Ifá, compuesta por 16 roles clave que aseguran 
								el funcionamiento armonioso y la preservación de nuestras 
								tradiciones espirituales y culturales. Liderado por el Oluwo, 
								la autoridad suprema en decisiones importantes y ceremonias 
								esenciales, nuestro concilio sigue el linaje Akinwande de Abeokuta, 
								Nigeria. Conoce más sobre los integrantes y el funcionamiento de 
								nuestro Concilio Ifá:
							</p>
						</motion.div>
					</div>
				</div>
			</div>
			<div className="row">
				<motion.div className="col-12 col-md-6 col-lg-3" variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
					<div className="card text-left intentoCard3">
						<div className="card-body">
							<img alt={"Guillermo Vega"} className={"img-fluid rounded-circle"} src={oluwo}/>
							<h3 className="card-title py-2">Guillermo Vega</h3>
							<span className="yellow">Oluwo</span>
							<span className="red">Apena Ogboni</span>
							<p className="card-text">Babalawo con 20 años de trayectoria</p>
							<p className="socials text-center">
								<i className="bi bi-twitter mx-1"></i> 
								<i className="bi bi-facebook mx-1"></i> 
								<i className="bi bi-whatsapp mx-1"></i> 
								<i	className="bi bi-instagram mx-1"></i>
							</p>
						</div>
					</div>
				</motion.div>
				<motion.div className="col-12 col-md-6 col-lg-3" variants={fadeIn('right', 0.4)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
					<div className="card text-left intentoCard3">
						<div className="card-body">
							<img alt={"Juan Vega"} className={"img-fluid rounded-circle"} src={akoda}/>
							<h3 className="card-title py-2">Juan Vega</h3>
							<span className="yellow">Akoda</span>
							<span className="red">Gege Ogboni</span>
							<p className="card-text">Babalawo con 20 años de trayectoria</p>
							<p className="socials text-center">
								<i className="bi bi-twitter mx-1"></i> 
								<i className="bi bi-facebook mx-1"></i> 
								<i className="bi bi-whatsapp mx-1"></i> 
								<i	className="bi bi-instagram mx-1"></i>
							</p>
						</div>
					</div>
				</motion.div>
				<motion.div className="col-12 col-md-6 col-lg-3" variants={fadeIn('right', 0.6)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
					<div className="card text-left intentoCard3">
						<div className="card-body">
							<img alt={"Julian Gascon"} className={"img-fluid rounded-circle"} src={aseda}/>
							<h3 className="card-title py-2">Julian Gascon</h3>
							<span className="yellow">Aseda</span>
							<p className="card-text">Babalawo con 17 años de trayectoria</p>
							<p className="socials text-center">
								<i className="bi bi-twitter mx-1"></i> 
								<i className="bi bi-facebook mx-1"></i> 
								<i className="bi bi-whatsapp mx-1"></i> 
								<i	className="bi bi-instagram mx-1"></i>
							</p>
						</div>
					</div>
				</motion.div>
				<motion.div className="col-12 col-md-6 col-lg-3" variants={fadeIn('right', 0.8)} initial='hidden' whileInView='show' exit='hidden'  viewport={{ once: true }} layoutScroll>
					<div className="card text-left intentoCard3">
						<div className="card-body">
							<img alt={"Nelson Mendoza"} className={"img-fluid rounded-circle"} src={ojugbona}/>
							<h3 className="card-title py-2">Nelson Mendoza</h3>
							<span className="yellow">Ojugbona</span>
							<p className="card-text">Babalawo con 16 años de trayectoria</p>
							<p className="socials text-center">
								<i className="bi bi-twitter mx-1"></i> 
								<i className="bi bi-facebook mx-1"></i> 
								<i className="bi bi-whatsapp mx-1"></i> 
								<i className="bi bi-instagram mx-1"></i>
							</p>
						</div>
					</div>
				</motion.div>
			</div>
			<p className="botonConcilio text-center"><Link to="/concilio" className="btn btn-success d-grid gap-2 col-6 mx-auto text-white">Conoce mas</Link></p>
		</div>
	</section>
  )
}

export default Concile