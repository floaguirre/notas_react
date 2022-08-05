import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPactientes from "./components/ListadoPactientes"

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( e => e.id !== id);
    setPacientes(pacientesActualizados);

  }
  

  return (
    <div className="container mx-10 mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
           
        />
        <ListadoPactientes
          pacientes={pacientes} 
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
