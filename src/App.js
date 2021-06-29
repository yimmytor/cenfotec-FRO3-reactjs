import React from 'react';
import Cookies from 'universal-cookie';
import {Fragment} from 'react';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import MainComponent from './components/MainComponent/MainComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import ModalComponent from './components/ModalComponent/ModalComponent';

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
              {method: this.todas.bind(this), label: 'Aceptar Todas', classButton: 'modalButton'},
              {method: this.necesarias.bind(this), label: 'Sólo las necesarias', classButton: 'modalButton'}                            
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

  todas(e) {
    this.establecerCookies('todas');        
  }

  necesarias(e){
    this.establecerCookies('necesarias');    
  }

  render() {    
    return (
      <Fragment>
        {this.mostrarModalCookies()}              
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </Fragment>
    );
  }
}

export default App;
