import React from 'react';
import './TestimonialCardComponent.css';

function TestimonialCardComponent({avatar, nombre, puesto, mensaje}){    
    return(
        <div className="testimonial-card">      
            <img src={avatar} alt="Avatar del cliente que da el testimonio"/>
            <p className="testimonial-nombre">{nombre}</p>
            <p className="testimonial-puesto">{puesto}</p>
            <p className="testimonial-mensaje">
                <q>{mensaje}</q>
            </p>
        </div>
    );
}

export default TestimonialCardComponent;
