//Importing methods
import React from "react";

//Importing styles
import "./ModalBox.scss";

//ModalBox component
export class ModalBox extends React.Component {render() {
        return (
            <div className="modal">
                <div className="modal__box">
                    {/* description is taken from state in component that turn on modal */}
                    <span>{this.props.description}</span>
                    <button onClick={() => this.props.handleClosingModal()}>OK</button>
                </div>
            </div>
        )
    }
};