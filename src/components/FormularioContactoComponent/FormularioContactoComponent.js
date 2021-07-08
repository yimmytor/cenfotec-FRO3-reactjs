import React from 'react';
import {Formik} from 'formik';
import './FormularioContactoComponent.css';

class FormularioContactoComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'mensajeEnviado': '',
            'claseMensaje': 'mensaje' 
        }        
    }

    render() {
        return(
            <Formik
                initialValues={{ nombre: '', telefono: '', correo: '', mensaje: '' }}
                validate={values => {
                    const errors = {};

                    if(!values.nombre) {
                        errors.nombre = 'Rellena este campo obligatorio';
                    }

                    if(!values.telefono) {
                        errors.telefono = 'Rellena este campo obligatorio';
                    }

                    if(!values.correo) {
                        errors.correo = 'Rellena este campo obligatorio';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
                        errors.correo = 'Formato de correo electrónico inválido';
                    }

                    if(!values.mensaje) {
                        errors.mensaje = 'Rellena este campo obligatorio';
                    }
                    
                    return errors;
                }}
                onSubmit={(values, {setSubmitting, resetForm}) => {  
                    this.setState({
                        'mensajeEnviado': `¡Gracias ${values.nombre} su mensaje ha sido enviado!`,
                        'claseMensaje': 'mensaje enviado'
                    });

                    setTimeout(() => {
                        setSubmitting(false);
                        resetForm();  

                        this.setState({'mensajeEnviado': '', 'claseMensaje': 'mensaje'});                  
                    }, 3000);
                }}
            >
                {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting,handleReset}) => (
                    <form className="formulario-contacto" onSubmit={handleSubmit}>
                        
                        <div className="form-field">
                            <label htmlFor="nombre">Nombre Completo:<span className="requerido">*</span></label>
                            <input id="nombre" type="text" name="nombre" onBlur={handleBlur} onChange={handleChange} value={values.nombre} />
                            <div className="field-errors">{errors.nombre && touched.nombre && errors.nombre}</div>
                        </div>
                            
                        <div className="form-field-box-horizontal">
                            <div className="form-field">
                                <label htmlFor="telefono">Teléfono:<span className="requerido">*</span></label>
                                <input id="telefono" type="tel" name="telefono" onBlur={handleBlur} onChange={handleChange} value={values.telefono} />
                                <div className="field-errors">{errors.telefono && touched.telefono && errors.telefono}</div>
                            </div>
                        

                            <div className="form-field">
                                <label htmlFor="correo">Correo Electrónico:<span className="requerido">*</span></label>
                                <input id="correo" type="email" name="correo" onBlur={handleBlur} onChange={handleChange} value={values.correo} />
                                <div className="field-errors">{errors.correo && touched.correo && errors.correo}</div>
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="mensaje">Mensaje:<span className="requerido">*</span></label>
                            <textarea id="mensaje" name="mensaje" onBlur={handleBlur} onChange={handleChange} value={values.mensaje} />
                            <div className="field-errors">{errors.mensaje && touched.mensaje && errors.mensaje}</div>
                        </div>

                        <div className={this.state.claseMensaje}>{this.state.mensajeEnviado}</div>

                        <button type="submit" disabled={isSubmitting}>Enviar</button>                        
                    </form>
                )}
            </Formik>
        );
    }
}

export default FormularioContactoComponent;