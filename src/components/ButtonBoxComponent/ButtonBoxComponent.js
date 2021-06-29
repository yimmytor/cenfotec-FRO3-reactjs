import React from 'react';
import './ButtonBoxComponent.css';

class ButtonBoxComponent extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            buttons: [],
        }
    }

    componentDidMount() {
        this.setButtons();
    }
    
    setButtons() {
        let key = 1;

        let buttonsHtml = this.props.buttons.map((buttonElement) =>
            <button key={(key++).toString()} className={buttonElement.classButton}
            onClick={buttonElement.method}>{buttonElement.label}</button>            
        );

        this.setState(
            {buttons: buttonsHtml}
        );
    }

    render() {
        return(
            <div className="modalButtonBox">
                {this.state.buttons}
            </div>
        );
    }
}

export default ButtonBoxComponent;