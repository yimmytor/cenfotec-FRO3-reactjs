import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './RouterComponent.css';
import NotFoundComponent from '../NotFoundComponent/NotFoundComponent';

class RouterComponent extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        rutas: ''
      };
    }
    
    generarRutas(){
      let rutas = this.props.menuLinks;
      let home = rutas.filter(ruta=>ruta.homePage)[0];
      let key = 1;

      return(
        <Switch>
          {rutas.map(ruta=><Route key={key++} exact path={ruta.url}>{ruta.componente}</Route>)}
          {home !== undefined ? <Route exact path="/"><Redirect to={home.url} /></Route> : null}          
          <Route path="*">
            <NotFoundComponent />
          </Route>                        
        </Switch>        
      );
    }

    componentDidMount(){
      this.setState({rutas: this.generarRutas()})
    }

    render() {
        return (
          <main>
            {this.state.rutas}            
          </main>          
        );
    }
}
 
export default RouterComponent;