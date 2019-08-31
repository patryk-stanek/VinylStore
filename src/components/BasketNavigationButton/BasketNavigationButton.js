//Importing methods
import React from "react";
import { connect } from "react-redux";

//Importing styles and icons
import "./BasketNavigationButton.scss";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

class BasketNavigationButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdated: false
        };
    }

    //setting state for simple animation for icon 
    componentWillReceiveProps() {
        this.setState({isUpdated: true});
        setTimeout(() => this.setState({isUpdated: false}), 300);//after .3 second change state to false and turn off the color
    }

    render() {
        //condition for animation
        const updateStyling = this.state.isUpdated ? "basket-navigation-button__icon--updated" : "";
        return (
            <div className="basket-navigation-button">
                <i className={`fas fa-shopping-cart basket-navigation-button__icon ${updateStyling}`}></i>
                <span className="basket-navigation-button__items">{this.props.totalItems}</span>
                <span className="basket-navigation-button__price">€{parseFloat(this.props.totalCost).toFixed(2)}</span>
            </div>
        )
    }
}
;
//Mapping state= and connecting it with component
const mapStateToProps = store => ({
    totalCost: store.basketReducer.totalCost,
    totalItems: store.basketReducer.totalItems
});

export default connect(mapStateToProps)(BasketNavigationButton);