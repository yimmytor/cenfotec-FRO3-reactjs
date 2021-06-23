import './NavComponent.css';
import NavLinkComponent from "../NavLinkComponent/NavLinkComponent";

function NavComponent() {
    return (
        <nav>
            <ul>
                <NavLinkComponent url="#" nombre="Inicio" />
                <NavLinkComponent url="#" nombre="Nosotros" />
                <NavLinkComponent url="#" nombre="Servicios" />
                <NavLinkComponent url="#" nombre="Contacto" />
            </ul>
        </nav>
    );
}
 
export default NavComponent;