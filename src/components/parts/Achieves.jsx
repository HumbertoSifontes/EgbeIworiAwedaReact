import React from 'react'
import festivales from  '../images/festivales.jpg'
import locacion from '../images/locacion.jpg'
import consagraciones from '../images/consagraciones.jpg'
import { Link } from 'react-router-dom'

const Achieves = () => {
  return (
    <section className="logro section-padding" id="logro">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-header text-center pb-5">
						<h2>Avance</h2>
						<p>Conoce todo el avance que ha tenido<br/>
							el templo a pasar de los años</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-12 col-lg-4">
					<div className="card text-light text-center bg-white pb-2" id="cajaLogro">
						<div className="card-body text-dark">
							<div className="img-area mb-4">
								<img alt={"Locacion"} className={"card-img-top img-fluid"} src={locacion}/>
							</div>
							<h3 className="card-title">Locacion</h3>
							<p className="lead">
								El templo ha pernotado en un par de lugares al pasar de los años
								contando hoy con su propia locacion. Egbe propio donde hay Orisa consagrados
							</p>
							<Link className="btn btn-success text-white" to={'/avance'}>Conoce mas</Link>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-12 col-lg-4">
					<div className="card text-light text-center bg-white pb-2" id="cajaLogro">
						<div className="card-body text-dark">
							<div className="img-area mb-4">
								<img alt={"Consagraciones"} className={"card-img-top img-fluid"} src={consagraciones}/>
							</div>
							<h3 className="card-title">Ceremonias</h3>
							<p className="lead">
								En el templo hemos realizados todo tipo de consagraciones tanto en 
								Venezuela como en Africa. Consagraciones desde isefa hasta Ogboni
							</p>
							<Link className="btn btn-success text-white" to={'/avance'}>Conoce mas</Link>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-12 col-lg-4">
					<div className="card text-light text-center bg-white pb-2" id="cajaLogro">
						<div className="card-body text-dark">
							<div className="img-area mb-4">
								<img alt={'Festivales'} className={'card-img-top img-fluid'} src={festivales}/>
							</div>
							<h3 className="card-title">Festivales</h3>
							<p className="lead">
								El templo desde hace 8 años hace consecutivamente varios festivales a
								diferentes deidades con la participacion de todos los integrantes	
							</p>
							<Link className="btn btn-success text-white" to={'/avance'}>Conoce mas</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Achieves