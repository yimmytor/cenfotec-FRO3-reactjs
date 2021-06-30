import React from 'react';
import Cookies from 'universal-cookie';
import {Fragment} from 'react';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import RouterComponent from './RouterComponent/RouterComponent';
import FooterComponent from './FooterComponent/FooterComponent';
import ModalComponent from './ModalComponent/ModalComponent';
import {BrowserRouter as Router} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cookies: this.cookiesAceptadas()
    }
  }

  mostrarModalCookies() {
    if(this.state.cookies === undefined){
      return (
        <ModalComponent 
          title="AVISO DE COOKIES"
          message="Utilizamos cookies para mejorar su experiencia en nuestro sitio. Para continuar navegando seleccione la configuración de Cookies que desea utilizar."
          buttons={
            [
              {method: this.establecerCookies.bind(this,'todas'), label: 'Aceptar Todas', classButton: 'modalButton'},
              {method: this.establecerCookies.bind(this,'necesarias'), label: 'Sólo las necesarias', classButton: 'modalButton'}                            
            ]
          }
        />  
      );      
    }   
    
    return null;
  }

  establecerCookies(valor) {
    let cookies = new Cookies();

    cookies.set('cookies_aceptadas',valor);  

    this.setState(
      {cookies: valor}
    );
  }

  cookiesAceptadas() {
    let cookies = new Cookies();

    return cookies.get('cookies_aceptadas')
  }

  render() {    
    return (
      <Fragment>
        {this.mostrarModalCookies()}              
        <Router>
          <HeaderComponent />
          <RouterComponent />          
        </Router>
        <FooterComponent />
      </Fragment>
    );
  }
}

export default App;
