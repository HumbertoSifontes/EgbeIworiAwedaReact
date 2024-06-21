import React from 'react'
import Appoinment from './appointment'
import FondoIzquierdo from '../images/irukere.png'
import FondoSuperior from '../images/ide.png'

const Contacto = () => {
  return (
    <>
        <Appoinment/>
        <div className="fondoLateral7">
            <img src={FondoIzquierdo} alt="ikin" />
        </div>
        <div className="fondoLateral3">
            <img src={FondoSuperior} alt="ide" />
        </div>
    </>
  )
}

export default Contacto