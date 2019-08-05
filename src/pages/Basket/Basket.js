//Importing methods
import React from "react";
import { connect } from "react-redux";

//Importing actions
import {
    addToBasket,
    removeFromBasket,
    decreaseProductAmount,
    clearBasket } from "../../components/Basket/Basket.actions";

//Basket component
class Basket extends React.Component {
    constructor(props) {
        super(props);

        this.handleIncreaseProduct = this.handleIncreaseProduct.bind(this);
        this.handleRemovingProduct = this.handleRemovingProduct.bind(this);
        this.handleClearingBasket = this.handleClearingBasket.bind(this);
        this.handleDecreaseAmount = this.handleDecreaseAmount.bind(this);
    }

    handleIncreaseProduct(product) {
        this.props.dispatch(addToBasket(product));
    }

    handleRemovingProduct(product) {
        this.props.dispatch(removeFromBasket(product));
    }

    handleClearingBasket() {
        this.props.dispatch(clearBasket());
    }

    handleDecreaseAmount(product) {
        this.props.dispatch(decreaseProductAmount(product));
    }

    render() {
        return (
            <div>
                <h1>/basket</h1>
                <button onClick={() => this.handleClearingBasket()}>clear basket</button><br/>
                <span>total items: {this.props.totalItems}</span>
                <div>
                    {
                        this.props.basket.map(product => {
                            return <div>
                                <span id={product.id}>
                                    {product.name}
                                    <span> - </span>
                                    <span>{product.amount}</span>
                                    <button onClick={() => this.handleRemovingProduct(product)}>delete</button>
                                    <button onClick={() => this.handleIncreaseProduct(product)}>add One</button>
                                    <button onClick={() => this.handleDecreaseAmount(product)}>remove One</button>
                                </span><br/></div>
                        })
                    }
                </div>
                <span>{parseFloat(this.props.totalCost).toFixed(2)}</span>
            </div>
        )
    }
}

//Maping global state
const mapStateToProps = store => ({
    basket: store.basketReducer.basket,
    totalCost: store.basketReducer.totalCost,
    totalItems: store.basketReducer.totalItems
});

//Connecting state method with component
export default connect(mapStateToProps)(Basket);