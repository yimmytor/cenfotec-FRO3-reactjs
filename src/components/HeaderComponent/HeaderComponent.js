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
                        {url: '/inicio', etiqueta: 'Inicio'},
                        {url: '/nosotros', etiqueta: 'Nosotros'},
                        {url: '/servicios', etiqueta: 'Servicios'},
                        {url: '/contacto', etiqueta: 'Contacto'}                        
                    ]
                }/>
            </header>
        );
    }
}
 
export default HeaderComponent;