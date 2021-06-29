    import React from 'react';
import './ModalComponent.css';
import ButtonBoxComponent from '../ButtonBoxComponent/ButtonBoxComponent';

class ModalComponent extends React.Component {
    render(){
        return(
            <div className="modalBackground">
                <div className="modalForm">
                    <h2 className="modalTitle">{this.props.title}</h2>
                    <p className="modalMessage">{this.props.message}</p>
                    <ButtonBoxComponent buttons = {this.props.buttons}/>                    
                </div>
            </div>
        );
    }
}

export default ModalComponent;