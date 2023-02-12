import React from 'react'
import './BotonClear.css'

const BotonClear = ({children, manejarClear}) => {
  return (
    <div 
      className='boton-clear me-1'
      onClick={manejarClear}>
        {children}
    </div>
  )
}

export default BotonClear