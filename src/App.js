import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainter";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import './styles/styles.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (

    <div>

      <BrowserRouter>

        <NavBar/>
        
        <Switch>

          <Route exact path="/">
            <ItemListContainer msg="Componentes"/>
          </Route>

          <Route exact path="/detail/:itemId">
            <ItemDetailContainer/>
          </Route>

          <Route exact path="/category/:catId">
            <ItemListContainer msg="Componentes"/>
          </Route>

          <Route exact path="/servicios">
            <h1 className="services">Servicios</h1>
          </Route>

          <Route exact path="/sobreNosotros">
            <h1 className="aboutUs">About Us</h1>
          </Route>

          <Route exact path="/contacto">
            <h1 className="contact">Contacto</h1>
          </Route>

          <Route exact path="*">
            <h1 className="errorPage">404 - Not Found</h1>
          </Route>

        </Switch>

      </BrowserRouter>

    </div>

  );
}

export default App;
