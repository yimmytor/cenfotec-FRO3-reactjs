import React from 'react';
import './TestimonialCardComponent.css';

class TestimonialCardComponent extends React.Component {
    render(){
        return(
            <div className="testimonial-card">      
                <img src={this.props.avatar} alt="Avatar del cliente que da el testimonio"/>
                <p className="testimonial-nombre">{this.props.nombre}</p>
                <p className="testimonial-puesto">{this.props.puesto}</p>
                <p className="testimonial-mensaje">
                    <q>{this.props.mensaje}</q>
                </p>
            </div>
        );
    }
}

export default TestimonialCardComponent;
