//Importing methods
import React from "react";
import { connect } from "react-redux";

//Importing actions
import {
    addToBasket
} from "../Basket/Basket.actions";

//Importing styles
import "./BasketAddButton.scss";

class BasketAddButton extends React.Component {
    //if "stocked" value is true in databse product will be available for ordering
    renderBasketNotEmpty() {
        return (
            <button
                onClick={() => this.props.addToBasket(this.props.product)}
                className="add-to-basket"
            >
                <i className="add-to-basket__icon fas fa-cart-plus"></i>
            </button>
        )
    }

    //if "stocked" value is false in databse product will not be available for ordering
    renderBasketEmpty() {
        return (
            <React.Fragment>
                <button
                    className="add-to-basket"
                    disabled
                >
                    <i className="add-to-basket__icon fas fa-cart-plus"></i>
                    <span className="add-to-basket__out">
                        Item out of stock
                    </span>
                </button>
            </React.Fragment>
        )
    }

    render() {
        return this.props.product.stocked === true ? this.renderBasketNotEmpty() : this.renderBasketEmpty();
    }
}

//Mapping state, dispatch and connecting it with component
const mapStateToProps = store => ({
    basket: store.basketReducer.basket,
});

const mapDispatchToProps = dispatch => ({
    addToBasket: product => dispatch(addToBasket(product)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasketAddButton);