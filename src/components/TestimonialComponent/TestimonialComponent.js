import React, {useState, useEffect} from 'react';
import './TestimonialComponent.css';
import TestimonialCardComponent from '../TestimonialCardComponent/TestimonialCardComponent';

function TestimonialComponent () {
    const [testimonios, setTestimonios] = useState(null);
    
    async function cargarAPITestimonios(){
        try{
            let url = 'https://testimonialapi.toolcarton.com/api';
            let requestOptions = {method: 'GET', redirect: 'follow'}
            let testimoniosRequest = [];
            let response = await fetch(url, requestOptions);

            response = await response.json();

            for(let i=0; i<6; i++){
                testimoniosRequest.push(response[i]);
            }

            return testimoniosRequest;
        }catch(error){
            console.log('Error:',error);
        }
    }

    async function renderizarTestimonios() {
        let testimoniosAPI = await cargarAPITestimonios();
        
        setTestimonios(testimoniosAPI.map(testimonio => {
            return(<TestimonialCardComponent 
                avatar={testimonio.avatar}
                nombre={testimonio.name}                
                puesto={testimonio.designation}                
                mensaje={testimonio.message}                
            />);
        }));
    }

    useEffect(() => renderizarTestimonios(),[testimonios]);

    return(
        <div className="testimonial-container">
            <h2>Testimonios de Nuestros Clientes</h2>

            <div className="testimonial-box">
                {testimonios}                                
            </div>
        </div> 
    );
}

export default TestimonialComponent;