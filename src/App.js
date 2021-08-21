import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainter";
import './styles/styles.css'

function App() {
  return (

    <div>

      <NavBar/>
      <ItemListContainer msg="Servicio Técnico"/>
      

    </div>

  );
}

export default App;
