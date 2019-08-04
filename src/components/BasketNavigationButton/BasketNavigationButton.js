import React from "react";
import { connect } from "react-redux";

import "./BasketNavigationButton.scss";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

class BasketNavigationButton extends React.Component {
    render() {
        return (
            <div className="basket-navigation-button">
                <i className="fas fa-shopping-bag basket-navigation-button__icon"></i>
                <span className="basket-navigation-button__items">{this.props.totalItems}</span>
                <span className="basket-navigation-button__price">€{parseFloat(this.props.totalCost).toFixed(2)}</span>
            </div>
        )
    }
}

//Maping global state
const mapStateToProps = store => ({
    totalCost: store.basketReducer.totalCost,
    totalItems: store.basketReducer.totalItems
});

//Connecting state method with component
export default connect(mapStateToProps)(BasketNavigationButton);