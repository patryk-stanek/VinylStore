//Importing methods
import React from "react";
import { connect } from "react-redux";

//Importing actions
import {
    addToBasket,
    removeFromBasket,
    decreaseProductAmount,
    clearBasket,
    calculateDiscount } from "../../components/Basket/Basket.actions";

//Importing styles
import "./Cart.scss";

//Import discount codes
import discountCodes from "../../utils/discounts.json";

//Cart component
class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            codeEntered: '',
            discount: 0
        }

        this.handleIncreaseProduct = this.handleIncreaseProduct.bind(this);
        this.handleRemovingProduct = this.handleRemovingProduct.bind(this);
        this.handleClearingBasket = this.handleClearingBasket.bind(this);
        this.handleDecreaseAmount = this.handleDecreaseAmount.bind(this);
        this.handleDiscount = this.handleDiscount.bind(this);
        this.handleCodeEnter = this.handleCodeEnter.bind(this);
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

    handleCodeEnter(event) {
        this.setState({
            codeEntered: event.target.value
        })
    }

    handleDiscount(event) {
        event.preventDefault();
        for (let i=0; i<discountCodes.length; i++) {
            if(discountCodes[i].rabatCode === this.state.codeEntered && this.state.discount === 0) {
                this.setState({
                    discount: discountCodes[i].discount
                })
            } 
        }

    }

    render() {
        const discountButton = this.state.discount === 0 ? "cart__button-text--active" : "cart__button-text--inactive";
        const discountText = this.state.discount > 0 ? `You have ${this.state.discount * 100}% discount` : "";
        return (
            <div className="cart">
                <h1 className="cart__header">Your Cart</h1>
                <div className="cart__container">
                    <button 
                        onClick={() => this.handleClearingBasket()}
                        className="cart__clean-button"
                    >
                        <i className="cart__clear-icon far fa-trash-alt"></i>clear basket
                    </button>
                    <ul className="cart__list">
                    {
                        this.props.basket.map(product => {
                            return (
                                <li className="cart__item" key={product.id}>
                                    <div className="cart__box">
                                        <span className="cart__name">{product.name}</span>
                                        <span className="cart__artist">{product.artist}</span>
                                    </div>
                                    <div className="cart__box">
                                        <button
                                            onClick={() => this.handleIncreaseProduct(product)}
                                            className="cart__button-icon"
                                        >
                                            <i className="cart__icon fas fa-plus"></i>
                                        </button>
                                        <span className="cart__amount">{product.amount}</span>
                                        <button
                                            onClick={() => this.handleDecreaseAmount(product)}
                                            className="cart__button-icon"
                                        >
                                            <i className="cart__icon fas fa-minus"></i>
                                        </button>
                                        <button
                                            onClick={() => this.handleRemovingProduct(product)}
                                            className="cart__button-icon"
                                        >
                                            <i className="cart__icon fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <div className="cart__summary">
                        <span className="cart__total-items">Total items: {this.props.totalItems}</span>
                        <form onSubmit={this.handleDiscount} className="cart__discounts">
                            <input type="text" onChange={this.handleCodeEnter}/>
                            <input type="submit" value="submit" className={"cart__button-text " + discountButton}/>
                        </form>
                        <span className="cart__discount-text">{discountText}</span>
                        <span className="cart__total-cost">
                            Total cost: 
                            <span>
                                {
                                    parseFloat(this.props.totalCost - (this.props.totalCost * this.state.discount)).toFixed(2)
                                }
                            </span>
                        </span>
                        <button className="cart__button-text cart__button-text--active" onClick={() => alert('Thank You for Your order!')}>Place order!</button>
                    </div>
                </div>
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
    decreaseProductAmount: product => dispatch(decreaseProductAmount(product)),
    calculateDiscount: code => dispatch(calculateDiscount(code))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);