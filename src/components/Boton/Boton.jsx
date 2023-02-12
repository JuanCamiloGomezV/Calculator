import React from 'react'
import './Boton.css'

const Boton = ({children,manejarClic}) => {

    const esOperador = valor => { 
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }
  return (
    <button 
    className={`boton-contenedor ${esOperador(children) ? 'operador' : ''}`.trimEnd()}
    onClick={() => manejarClic(children)}>
        {children}
    </button>
  )
}

export default Boton