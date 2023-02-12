import React from 'react'
import './BotonDelete.css'

const BotonDelete = ({children,manejarDelete}) => {
  return (
    <div 
      className='boton-delete ms-1'
      onClick={manejarDelete}>
        {children}
    </div>
  )
}

export default BotonDelete