import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './RouterComponent.css';
import Inicio from '../InicioComponent/InicioComponent';
import Nosotros from '../NosotrosComponent/NosotrosComponent';
import Servicios from '../ServiciosComponent/ServiciosComponent';
import Contacto from '../ContactoComponent/ContactoComponent';
import NotFoundComponent from '../NotFoundComponent/NotFoundComponent';

class RouterComponent extends React.Component {
    render() {
        return (
          <main>
            <Switch>
              <Route exact path="/">
                <Redirect to="/inicio" />
              </Route>
              <Route exact path="/inicio">
                <Inicio />
              </Route>
              <Route exact path="/nosotros">
                <Nosotros />
              </Route>
              <Route exact path="/servicios">
                <Servicios />
              </Route>
              <Route exact path="/contacto">
                <Contacto />
              </Route>
              <Route path="*">
                <NotFoundComponent />
              </Route>          
            </Switch>
          </main>          
        );
    }
}
 
export default RouterComponent;