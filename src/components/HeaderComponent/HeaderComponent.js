import React from 'react';
import './HeaderComponent.css';
import NavComponent from '../NavComponent/NavComponent';
import logo from '../../assets/img/logo.png';

class HeaderComponent extends React.Component {    
    render(){
        return(
            <header>
                <img src={logo} alt="Logo de ignova"/>
                <span>Outsourcing Administrativo - Contable</span>
                <NavComponent />
            </header>
        );
    }
}
 
export default HeaderComponent;