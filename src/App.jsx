import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CalculadoraContenedor from './components/CalculadoraContenedor/CalculadoraContenedor';

function App() {

  return (
    <div className='App d-flex flex-column'>
      <div className='calculator-logo-contenedor d-flex justify-content-center align-items-center m-1'>
        <h1 className='calculator-logo'>Calculator</h1>
      </div>
      <CalculadoraContenedor/>
      <p className='text-white'>Made with 🤍 by Juan Camilo Gómez.</p>
    </div>
  )
}

export default App
