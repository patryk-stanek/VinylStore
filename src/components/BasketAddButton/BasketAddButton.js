//Importing methods
import React from "react";
import { connect } from "react-redux";

//Importing actions
import {
    addToBasket
} from "../Basket/Basket.actions"

//Importing styles
import "./BasketAddButton.scss";

class BasketAddButton extends React.Component {
    constructor(props) {
        super(props)

        this.handleAddToBasket = this.handleAddToBasket.bind(this);
    }

    handleAddToBasket(product) {
        this.props.addToBasket(product);
    }

    renderStocked() {
        return (
            <button
                onClick={() => this.handleAddToBasket(this.props.product)}
                className="add-to-basket"
            >
                <i className="add-to-basket__icon fas fa-cart-plus"></i>
            </button>
        )
    }

    renderNotStocked() {
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
        return this.props.product.stocked === true ? this.renderStocked() : this.renderNotStocked();
    }
}

//Maping global state
const mapStateToProps = store => ({
    basket: store.basketReducer.basket
});

const mapDispatchToProps = dispatch => ({
    addToBasket: product => dispatch(addToBasket(product)),
})

//Connecting state method with component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasketAddButton);