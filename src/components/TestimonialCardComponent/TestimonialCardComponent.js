import React from 'react';
import './TestimonialCardComponent.css';

class TestimonialCardComponent extends React.Component {
    render(){
        return(
            <div>                
                <img src={this.props.avatar}/>
                <p>Nombre: {this.props.nombre}</p>
                <p>Puesto: {this.props.puesto}</p>
                <p>{this.props.mensaje}</p>
            </div>
        );
    }
}

export default TestimonialCardComponent;
