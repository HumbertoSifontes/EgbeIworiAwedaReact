import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <section className="login container-fluid d-flex justify-content-center align-items-center vh-100" id="login">
      <div className='containerForm p-4 rounded'>
        <div className="loginform">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center pb-3">
                <h2>Ingresa</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Usuario</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Contraseña</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" htmlFor="exampleCheck1">Recuérdame</label>
                </div>
                <p className="botonConcilio text-center"><input className="enviar btn btn-success d-grid gap-2 col-6 mx-auto text-white" type="submit" value="Enviar"/></p>
                <p className='text-center'><Link to="/register">¿No tienes cuenta?</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
