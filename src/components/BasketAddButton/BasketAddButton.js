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

    render() {
        return (
            <button onClick={() => this.handleAddToBasket(this.props.product)}>Add to basket</button>
        )
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