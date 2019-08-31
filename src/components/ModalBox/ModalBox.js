//Importing methods
import React from "react";

//Importing styles
import "./ModalBox.scss";

//ModalBox component
export class ModalBox extends React.Component {render() {
        return (
            <div className="modal">
                <div className="modal__box">
                    <span>{this.props.description}</span>
                    <button onClick={() => this.props.handleModalClose()}>OK</button>
                </div>
            </div>
        )
    }
};