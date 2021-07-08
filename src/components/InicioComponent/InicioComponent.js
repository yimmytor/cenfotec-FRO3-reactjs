import React from 'react';
import './InicioComponent.css';
import TestimonialBoxComponent from '../TestimonialBoxComponent/TestimonialBoxComponent'

class InicioComponent extends React.Component {
    render() {
        return(
            <div className="inicio-box">
                <h1>¡Haga Crecer su Negocio!</h1>
                <TestimonialBoxComponent />
            </div>
        );
    }
}

export default InicioComponent;