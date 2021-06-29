import React from 'react';
import './NavLinkComponent.css';

class NavLinkComponent extends React.Component {
    render() {
        return(
            <li><a href={this.props.url}>{this.props.etiqueta}</a></li>
        );
    }
}

export default NavLinkComponent;