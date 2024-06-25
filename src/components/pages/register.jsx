import React, { useState } from 'react';
import ParticlesBackground from '../../animations/Particles/particlesBackground';

const Registration = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    correo: '',
    rol: '',
    contraseña: '',
    confirmacionContraseña: '',
    edad: '',
    fechaIniciacion: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.contraseña !== formData.confirmacionContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log(formData);
  };

  return (
    <section className="section-padding" id="login">
      <ParticlesBackground />
      <div className='form-container my-5 p-4 rounded'>
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center pb-3">
              <h2>Registrate</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Usuario</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label fw-bold">Correo</label>
                <input type="email" className="form-control" id="correo" name="correo" value={formData.correo} onChange={handleChange} required/>
                <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="rol" className="form-label fw-bold">Rol</label>
                <select className="form-control" id="rol" name="rol" value={formData.rol} onChange={handleChange} required>
                  <option value="" disabled>Escoge uno...</option>
                  <option value="visitante">Visitante</option>
                  <option value="isefa">Isefa</option>
                  <option value="babalawo">Babalawo</option>
                  <option value="iyanifa">Iyanifa</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="edad" className="form-label fw-bold">Edad</label>
                <input type="number" className="form-control" id="edad" name="edad" min="0" max="99" value={formData.edad} onChange={handleChange} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="fechaIniciacion" className="form-label fw-bold">Fecha de Iniciación <span className='fw-normal'>(Opcional)</span></label>
                <input type="date" className="form-control" id="fechaIniciacion" name="fechaIniciacion" value={formData.fechaIniciacion} onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="contraseña" className="form-label fw-bold">Contraseña</label>
                <input type="password" className="form-control" id="contraseña" name="contraseña" value={formData.contraseña} onChange={handleChange} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="confirmacionContraseña" className="form-label fw-bold">Confirmación de Contraseña</label>
                <input type="password" className="form-control" id="confirmacionContraseña" name="confirmacionContraseña" value={formData.confirmacionContraseña} onChange={handleChange} required/>
              </div>
              <p className="botonConcilio text-center"><input className="enviar btn btn-success d-grid gap-2 col-6 mx-auto text-white" type="submit" value="Enviar"/></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
