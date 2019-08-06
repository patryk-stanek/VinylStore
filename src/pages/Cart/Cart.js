//Importing methods
import React from "react";
import { connect } from "react-redux";

//Importing actions
import {
    addToBasket,
    removeFromBasket,
    decreaseProductAmount,
    clearBasket } from "../../components/Basket/Basket.actions";

//Cart component
class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.handleIncreaseProduct = this.handleIncreaseProduct.bind(this);
        this.handleRemovingProduct = this.handleRemovingProduct.bind(this);
        this.handleClearingBasket = this.handleClearingBasket.bind(this);
        this.handleDecreaseAmount = this.handleDecreaseAmount.bind(this);
    }

    handleIncreaseProduct(product) {
        this.props.addToBasket(product);
    }

    handleRemovingProduct(product) {
        this.props.removeFromBasket(product);
    }

    handleClearingBasket() {
        this.props.clearBasket();
    }

    handleDecreaseAmount(product) {
        this.props.decreaseProductAmount(product);
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

const mapDispatchToProps = dispatch => ({
    addToBasket: product => dispatch(addToBasket(product)),
    removeFromBasket: product => dispatch(removeFromBasket(product)),
    clearBasket: () => dispatch(clearBasket()),
    decreaseProductAmount: product => dispatch(decreaseProductAmount(product))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);