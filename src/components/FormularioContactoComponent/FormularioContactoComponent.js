import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class FormularioContactoComponent extends React.Component {
    render() {
        return(
            <Formik 
            initialValues={{}}
            
            validate={values => {
                let errors = {};

                if(values.nombre === ''){
                    errors.nombre = 'Debe indicar el nombre';
                }

                if(values.telefono === ''){
                    errors.telefono = 'Debe indicar un número de teléfono';
                }

                if(values.mensaje === ''){
                    errors.mensaje = 'Debe indicar un mensaje';
                }

                if (values.correo === "") {
                    errors.correo = "El correo electrónico es requerido";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
                    errors.correo = "El formato del correo electrónico es incorrecto";
                }
            }}

            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(false);
            }}
            >
                {(touched, errors, isSubmitting) => (
                    <Form>
                        
                    </Form>
                )}
            </Formik>
        );
    }
}

export default FormularioContactoComponent;