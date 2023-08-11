import React from 'react'

const Form = () => {
  return (
    <section class="contact section-padding" id="contact">
		<div class="container mt-5 mb-5">
			<div class="row">
				<div class="col-md-12">
					<div class="section-header text-center pb-5">
						<h2>Contactanos</h2>
						<p>Escribenos para apartar una cita<br/>
							y en breve nos comunicaremos contigo</p>
					</div>
				</div>
			</div>
			<div class="row m-0">
				<div class="col-md-12 p-0 pt-4 pb-4">
					<form action="https://formsubmit.co/citovis217@rc3s.com" method="POST" class="p-4.m-auto">
					<div class="row">
						<div class="col-md-12">
							<div class="mb-3">
								<input type="text" class="form-control" required placeholder="Nombre y Apellido"/>
							</div>
						</div>
						<div class="col-md-12">
							<div class="mb-3">
								<input type="email" class="form-control" required placeholder="Correo electronico"/>
							</div>
						</div>
						<div class="col-md-12">
							<div class="mb-3">
								<textarea rows="3" required class="form-control" placeholder="Escribe un mensaje"></textarea>
							</div>
						</div>
					</div>
						<p class="botonConcilio text-center"><input class="enviar btn btn-success d-grid gap-2 col-6 mx-auto text-white" type="submit" value="Enviar"/></p>
					</form>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Form