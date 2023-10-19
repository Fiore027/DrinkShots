import NavBar from "./Componentes/NavBar";
import Inicio from './Screens/Inicio';
import Tipos from "./Screens/Tipos";
import Bocas from "./Screens/Bocas";
import Contact from "./Screens/Contact";

function App() {
  return (
    <div className="Appcontainer">
         <header className='App-header'>

         <NavBar /> 

          <Inicio /> 
         <Tipos />
          <Bocas />
         <Contact />
          
        </header>  
    </div>
  );
}

export default App;