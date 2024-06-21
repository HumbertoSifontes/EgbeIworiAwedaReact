import React from 'react';
import {motion} from 'framer-motion'

export const transitionVariantUp = {
    initial: {
      y: '50%',
      height: '100%'
    },
    animate: {
      y: '0%',
      height: '0%'
    },
    exit: {
      y: '50%',
      height: '100%'
    }
  };
  
  export const transitionVariantBottom = {
    initial: {
      y: '-50%',
      height: '100%'
    },
    animate: {
      y: '0%',
      height: '0%'
    },
    exit: {
      y: '-50%',
      height: '100%'
    }
  };
  

const Transition = ({ children }) => {
  return (
    <>
      <motion.div 
        className='transitionDown door1' 
        variants={transitionVariantUp}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='transitionDown door2' 
        variants={transitionVariantUp}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='transitionDown door3' 
        variants={transitionVariantUp}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='transitionUp door12' 
        variants={transitionVariantBottom}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='transitionUp door2' 
        variants={transitionVariantBottom}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='transitionUp door3' 
        variants={transitionVariantBottom}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
      {children}
    </>
  );
};

export default Transition;
