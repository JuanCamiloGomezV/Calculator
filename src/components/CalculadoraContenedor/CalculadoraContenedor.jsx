import React from 'react'
import './CalculadoraContenedor.css'
import Boton from '../Boton/Boton'
import Pantalla from '../Pantalla/Pantalla'
import BotonClear from '../BotonClear/BotonClear'
import BotonDelete from '../BotonDelete/BotonDelete'
import { useState } from 'react'
import {evaluate} from 'mathjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CalculadoraContenedor = () => {
    const [input, setInput] = useState('');

    const agregarInput = (val) =>{
        const notify = (texto) => toast.error(texto, {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });;
        if( isNaN(input.charAt(input.length-1)) && isNaN(val))
        {
            notify('Valor no valido');
        }
        else if(input.length==0 && isNaN(val))
        {
            notify('Ingresar primero un numero');
        }
        else
        {
            setInput(input + val);
        }
        
        
    };
    
    const calcularResultado = () => {
        if(input) {
            const res=evaluate(input)
            setInput(String(res))
        } else
        {
            const notify = () => toast.error('Por favor ingrese valores para realizar los calculos', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
                });;
            notify();
        }
        
    }

  return (
    <div className='contenedor-calculadora mb-3'>
        <Pantalla input={input}/>
        <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
            <BotonClear manejarClear={()=>setInput('')}>Clear</BotonClear>
            <BotonDelete manejarDelete={()=>setInput(input.substring(0, input.length-1))}>Delete</BotonDelete>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default CalculadoraContenedor