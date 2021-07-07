import React from 'react';
import './NavComponent.css';
import NavLinkComponent from "../NavLinkComponent/NavLinkComponent";

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
        
        this.menuLinks = [...this.props.menuLinks];

        this.state = {            
            menu: ''
        }
    }

    componentDidMount() {        
        this.establecerMenuActivo(window);
    }

    obtenerRutaActual(ruta) {
        let rutaFinal = ruta.toString().split('/');

        return '/' + rutaFinal[rutaFinal.length - 1];
    }

    establecerMenuActivo(e) {        
        let rutaActual;

        if(e.hasOwnProperty('location')) {        
            rutaActual = this.obtenerRutaActual(window.location.href);            
        }else{            
            rutaActual = this.obtenerRutaActual(e.target.href);
        }

        let menuActivo = false;        
        
        this.menuLinks = [...this.menuLinks.map(link => {
                link.activo = false;

                if(!menuActivo && (link.url === rutaActual || (link.homePage && rutaActual === '/'))) {
                    menuActivo = true;
                    
                    link.activo = true;
                }   

                return link;
            }               
        )];

        this.generarMenu();
    }

    generarMenu(){
        let linkID = 1;      
        
        this.setState({menu: 
            this.menuLinks.map(link => {
                    return <NavLinkComponent key={(linkID++).toString()} clase={link.activo?'link-activo':''} url={link.url} texto={link.texto} setActivo={this.establecerMenuActivo.bind(this)}/>
                }
            )
        });
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