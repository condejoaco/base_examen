import './App.css'
import Card from './components/Card'
import { useState } from 'react'

function App() {

  const [nombre, setNombre] = useState("");
  const [formulario, setFormulario] = useState(false);

  const pepito = e=>{setNombre(e.target.value)}

  const handleSubmit= event => {
    event.preventDefault()
    if(nombre === ""){
      alert("esto esta mal")
    } else{
      setFormulario(true)
    }
  }

  return (
    <>
      <div className='App'>
        <h1>Carga de Estudiantes</h1>
        <form onSubmit={handleSubmit}>
          <label> Nombre </label>
            <input
              value={nombre} //Inicial
              onChange={pepito}
            />
            <input type="submit"/>
          
        </form>
        <Card/>
      </div>
    </>
  )
}

export default App
