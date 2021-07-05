import React from 'react';
import './NavComponent.css';
import NavLinkComponent from "../NavLinkComponent/NavLinkComponent";

class NavComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {            
            menuLinks: [
                {url: '/inicio', etiqueta: 'Inicio',activo: true},
                {url: '/nosotros', etiqueta: 'Nosotros',activo: false},
                {url: '/servicios', etiqueta: 'Servicios',activo: false},
                {url: '/contacto', etiqueta: 'Contacto',activo: false}                        
            ],
            menu: null
        }  
    }

    setActivo(e){
        console.log(this);
        this.establecerMenuActivo(e.target.href.toString().split('/')[e.target.href.toString().split('/').length-1]);    
    }

    establecerMenuActivo(menu){        
        let menuParamentro = '/' + menu;
        let menuActivo = false
        
        console.log(menuParamentro);

        this.setState({menu: this.state.menuLinks.map(link => {
                if(!menuActivo && link.url === menuParamentro){
                    menuActivo = true;
                    return link.activo = true;
                }else{
                    return link.activo = false;
                }   
            }   
        )});

        this.generarMenu();
    }

    generarMenu(){
        let linkID = 1;      
        
        this.setState({menu: 
            this.state.menuLinks.map(link =>
                <NavLinkComponent key={(linkID++).toString()} activo={link.activo} url={link.url} etiqueta={link.etiqueta} setActivo={this.setActivo.bind(this)}/>
            )
        });
    }   

    componentDidMount(){
        this.generarMenu();
    }

    render() {
        return(
            <nav>
                <ul>
                    {this.state.menu}
                </ul>
            </nav>
        );
    }
}
 
export default NavComponent;