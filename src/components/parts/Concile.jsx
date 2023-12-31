import React from 'react'
import oluwo from '../images/oluwo.jpg'
import aseda from '../images/aseda.jpg'
import akoda from '../images/akoda.jpg'
import ojugbona from '../images/ojugbona.jpg'
import { Link } from 'react-router-dom'

const Concile = () => {
  return (
    <section className="concilio section-padding" id="concilio">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-header text-center pb-5">
						<h2>Concilio Ifa</h2>
						<p>Nuestro Egbe obedece a una estructura jerarquica de un Concilio Ifa. <br/>
							Algunos de los integrantes:
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-6 col-lg-3">
					<div className="card text-left">
						<div className="card-body">
							<img alt={"Guillermo Vega"} className={"img-fluid rounded-circle"} src={oluwo}/>
							<h3 className="card-title py-2">Guillermo Vega</h3>
							<span className="yellow">Oluwo</span>
							<span className="red">Apena Ogboni</span>
							<p className="card-text">Babalawo con 20 años de trayectoria</p>
							<p className="socials text-center">
								<i className="bi bi-twitter text-dark mx-1"></i> 
								<i className="bi bi-facebook text-dark mx-1"></i> 
								<i className="bi bi-whatsapp text-dark mx-1"></i> 
								<i	className="bi bi-instagram text-dark mx-1"></i>
							</p>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-3">
					<div className="card text-left">
						<div className="card-body">
							<img alt={"Juan Vega"} className={"img-fluid rounded-circle"} src={akoda}/>
							<h3 className="card-title py-2">Juan Vega</h3>
							<span className="yellow">Akoda</span>
							<span className="red">Gege Ogboni</span>
							<p className="card-text">Babalawo con 20 años de trayectoria</p>
							<p className="socials text-center">
								<i className="bi bi-twitter text-dark mx-1"></i> 
								<i className="bi bi-facebook text-dark mx-1"></i> 
								<i className="bi bi-whatsapp text-dark mx-1"></i> 
								<i	className="bi bi-instagram text-dark mx-1"></i>
							</p>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-3">
					<div className="card text-left">
						<div className="card-body">
							<img alt={"Julian Gascon"} className={"img-fluid rounded-circle"} src={aseda}/>
							<h3 className="card-title py-2">Julian Gascon</h3>
							<span className="yellow">Aseda</span>
							<p className="card-text">Babalawo con 17 años de trayectoria</p>
							<p className="socials text-center">
								<i className="bi bi-twitter text-dark mx-1"></i> 
								<i className="bi bi-facebook text-dark mx-1"></i> 
								<i className="bi bi-whatsapp text-dark mx-1"></i> 
								<i	className="bi bi-instagram text-dark mx-1"></i>
							</p>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-3">
					<div className="card text-left">
						<div className="card-body">
							<img alt={"Nelson Mendoza"} className={"img-fluid rounded-circle"} src={ojugbona}/>
							<h3 className="card-title py-2">Nelson Mendoza</h3>
							<span className="yellow">Ojugbona</span>
							<p className="card-text">Babalawo con 16 años de trayectoria</p>
							<p className="socials text-center">
								<i className="bi bi-twitter text-dark mx-1"></i> 
								<i className="bi bi-facebook text-dark mx-1"></i> 
								<i className="bi bi-whatsapp text-dark mx-1"></i> 
								<i className="bi bi-instagram text-dark mx-1"></i>
							</p>
						</div>
					</div>
				</div>
			</div>
			<p className="botonConcilio text-center"><Link to="/concilio" className="btn btn-success d-grid gap-2 col-6 mx-auto text-white">Conoce mas</Link></p>
		</div>
	</section>
  )
}

export default Concile