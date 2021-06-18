import Navbar from './Navbar';
import logo from '../assets/img/logo.png';

const HeaderSite = () => {    
    return (
        <header>
            <img src={logo} />
            <span>Oursourcing Administrativo - Contable</span>
            <Navbar />
        </header>
    );
}
 
export default HeaderSite;