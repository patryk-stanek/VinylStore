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

    //Dispatching action with adding product to the basket
    handleAddToBasket(product) {
        this.props.dispatch(addToBasket(product));
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

//Connecting state method with component
export default connect(mapStateToProps)(BasketAddButton);