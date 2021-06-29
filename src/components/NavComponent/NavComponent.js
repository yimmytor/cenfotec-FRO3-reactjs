import React from 'react';
import './NavComponent.css';
import NavLinkComponent from "../NavLinkComponent/NavLinkComponent";

class NavComponent extends React.Component {
    generarMenu(){
        let linkID = 1;        
        let {menuLinks} = this.props;
        
        return menuLinks.map(link => 
            <NavLinkComponent key={(linkID++).toString()} url={link.url} etiqueta={link.etiqueta} />
        );
    }   

    render() {
        return(
            <nav>
                <ul>
                    {this.generarMenu()}
                </ul>
            </nav>
        );
    }
}
 
export default NavComponent;