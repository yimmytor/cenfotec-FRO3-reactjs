import React from 'react';
import './TestimonialBoxComponent.css';
import TestimonialCardComponent from '../TestimonialCardComponent/TestimonialCardComponent';

class TestimonialBoxComponent extends React.Component {    
    constructor(props){
        super(props);

        this.state = {
            'testimonios': null
        }
    }

    async cargarAPITestimonios(){
        try{
            let url = 'https://testimonialapi.toolcarton.com/api';
            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            }
            let testimonios = [];

            let response = await fetch(url,requestOptions);
            response = await response.json();

            for(let i=0; i<6; i++){
                testimonios.push(response[i]);
            }

            return testimonios;
        }catch(error){
            console.log('Error:',error);
        }
    }

    async renderizarTestimonios() {
        let testimonios = await this.cargarAPITestimonios();
        
        this.setState({'testimonios':testimonios.map(testimonio => {
            return(<TestimonialCardComponent 
                avatar={testimonio.avatar}
                nombre={testimonio.name}                
                puesto={testimonio.designation}                
                mensaje={testimonio.message}                
            />);
        })});

        console.log(this.state.testimonios);
    }

    componentDidMount(){
        this.renderizarTestimonios();
    }

    render(){
        return(
            <div>
                <h2>Testimonios</h2>
                {this.state.testimonios}                                
            </div>
            
        );
    }
}

export default TestimonialBoxComponent;
