import React from 'react'
import Appoinment from './appointment'
import FondoIzquierdo from '../images/irukere.png'
import FondoSuperior from '../images/ide.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../animations/variants'

const Contacto = () => {
  return (
    <>
        <Appoinment/>
        <motion.div className="fondoLateral7" variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden'>
            <img src={FondoIzquierdo} alt="irukere" />
        </motion.div>
        <motion.div className="fondoLateral3" variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden'>
            <img src={FondoSuperior} alt="ide" />
        </motion.div>
    </>
  )
}

export default Contacto