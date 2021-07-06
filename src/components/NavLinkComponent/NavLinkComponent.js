import React from 'react';
import {Link} from 'react-router-dom';  
import './NavLinkComponent.css';

class NavLinkComponent extends React.Component {
    render() {
        return(
            <li><Link onClick={this.props.setActivo} className={this.props.clase} to={this.props.url}>{this.props.etiqueta}</Link></li>            
        );
    }
}

export default NavLinkComponent;