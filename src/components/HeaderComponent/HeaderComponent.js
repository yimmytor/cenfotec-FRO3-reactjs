import React from 'react';
import './HeaderComponent.css';
import NavComponent from '../NavComponent/NavComponent';
import logo from '../../assets/img/logo.png';

class HeaderComponent extends React.Component {
    render(){
        return(
            <header>
                <img src={logo} alt="Logo de ignova"/>
                <span>Oursourcing Administrativo - Contable</span>
                <NavComponent menuLinks={
                    [
                        {url: '#', etiqueta: 'Inicio'},
                        {url: '#', etiqueta: 'Nosotros'},
                        {url: '#', etiqueta: 'Servicios'},
                        {url: '#', etiqueta: 'Contacto'}                        
                    ]
                }/>
            </header>
        );
    }
}
 
export default HeaderComponent;