import React from 'react'

const Form = () => {
  return (
    <section className="contact section-padding" id="contact">
		<div className="container mb-5 miniSectionServices">
			<div className="row">
				<div className="col-md-12">
					<div className="section-header text-center pb-5">
						<h2>Contactanos</h2>
						<p>Escribenos para apartar una cita<br/>
							y en breve nos comunicaremos contigo</p>
					</div>
				</div>
			</div>
			<div className="row m-0">
				<div className="col-md-12 p-0 pt-4 pb-4">
					<form action="https://formsubmit.co/citovis217@rc3s.com" method="POST" className="p-4.m-auto">
					<div className="row">
						<div className="col-md-12">
							<div className="mb-3">
								<input type="text" className="form-control" required placeholder="Nombre y Apellido"/>
							</div>
						</div>
						<div className="col-md-12">
							<div className="mb-3">
								<input type="email" className="form-control" required placeholder="Correo electronico"/>
							</div>
						</div>
						<div className="col-md-12">
							<div className="mb-3">
								<textarea rows="3" required className="form-control" placeholder="Escribe un mensaje"></textarea>
							</div>
						</div>
					</div>
						<p className="botonConcilio text-center"><input className="enviar btn btn-success d-grid gap-2 col-6 mx-auto text-white" type="submit" value="Enviar"/></p>
					</form>
				</div>
			</div>
			<div className="custom-shape-divider-top-1716557548">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
				</svg>
			</div>
		</div>
	</section>
  )
}

export default Form