import React from 'react';
import './InicioComponent.css';
import TestimonialComponent from '../TestimonialComponent/TestimonialComponent'

class InicioComponent extends React.Component {
    render() {
        return(
            <div className="inicio-box">
                <h1>¡Haga Crecer su Negocio!</h1>
                <TestimonialComponent />
            </div>
        );
    }
}

export default InicioComponent;