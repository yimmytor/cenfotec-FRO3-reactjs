import './NavLinkComponent.css';

function NavLinkComponent(props) {
    return(
        <li><a href={props.url}>{props.nombre}</a></li>
    );
}

export default NavLinkComponent;