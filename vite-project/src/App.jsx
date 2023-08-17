import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Card from './components/Card'
function App() {

  const [apellido, setApellido] = useState("")
  const [nombre, setNombre] = useState("")
  const [cardState, setCardstate] = useState(false)

  function handler(nombre, apellido) {
    if (nombre && apellido) {
      setApellido(apellido)
      setNombre(nombre)
      setCardstate(true)
    } else {
      setCardstate(false)
    }
  }
  
  return (
    <div>
      <Formulario handler={handler} />
      {cardState ? <Card nombre={nombre} apellido={apellido} /> : undefined}
    </div>
  )
}

export default App
