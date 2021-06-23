import './HeaderComponent.css';
import NavComponent from '../NavComponent/NavComponent';
import logo from '../../assets/img/logo.png';

function HeaderComponent() {    
    return (
        <header>
            <img src={logo} alt="Logo de ignova"/>
            <span>Oursourcing Administrativo - Contable</span>
            <NavComponent />
        </header>
    );
}
 
export default HeaderComponent;