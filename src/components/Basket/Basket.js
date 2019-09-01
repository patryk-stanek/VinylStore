//Importing methods
import React from "react";
import { connect } from "react-redux";

//Importing components
import { ModalBox } from "../ModalBox/ModalBox";

//Importing actions
import {
    addToBasket,
    removeFromBasket,
    decreaseProductAmount,
    clearBasket,
    calculateDiscount } from "./Basket.actions";

//Importing styles
import "./Basket.scss";

//Import discount codes
import discountCodes from "../../utils/discounts.json";

//Basket component
class Basket extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            codeEntered: "",
            discount: 0,
            modal: false,
            modalDescription: "Thank You for Your order!"
        };

        this.handleDiscount = this.handleDiscount.bind(this);
        this.handleDiscountCodeEntering = this.handleDiscountCodeEntering.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
    }

    componentDidMount() {
        this.setState({
            discount: this.props.discount,
            modal: false
        })
    }

    handleDiscountCodeEntering(event) {
        this.setState({
            codeEntered: event.target.value.toLowerCase()
        })
    }

    handleDiscount(event) {
        event.preventDefault();
        //loop for checking if entered code is placed in databse and there"s isn"t any discount active;
        for (let i=0; i<discountCodes.length; i++) {
            if(discountCodes[i].rabatCode === this.state.codeEntered && this.state.discount === 0) {
                this.setState({
                    discount: discountCodes[i].discount
                });
                this.props.calculateDiscount(discountCodes[i].discount);
            } 
        }
    }

    //there's no "real" ordering option, right now vstore is showing only modal with text while pressing order button
    handleOrder() {
        this.setState({
            codeEntered: "",
            modal: true
        })
        this.props.clearBasket();
    }

    handleClosingModal() {
        this.setState({
            modal: false
        })
    }

    renderOrderButton() {
        if (this.props.totalItems === 0) {
            return (
                <React.Fragment>
                    <span className="cart__discount-text">Your basket is empty!</span>
                    <button className="cart__button-text cart__button-text--submit" disabled>Place order!</button>
                </React.Fragment>
            )
        } else {
            return (
                <button className="cart__button-text cart__button-text--submit" onClick={() => this.handleOrder()}>Place order!</button>
            )
        }
    }

    render() {
        //if there"s a discount in state button is disabled
        const discountButton = this.state.discount === 0 ? "cart__button-text--active" : "cart__button-text--inactive";
        //if there"s a discount in state show text
        const discountText = this.state.discount > 0 ? `You have ${this.state.discount * 100}% discount` : "";
        //condition for showing ModalBox with custom text
        const modalBoxConfirmation = this.state.modal === true ? <ModalBox handleClosingModal={this.handleClosingModal.bind(this)} description={this.state.modalDescription}/> : "";

        return (
            <div className="cart">
                { modalBoxConfirmation }
                {/* Rendering component header */}
                <h1 className="cart__header">Your Cart</h1>
                <div className="cart__container">
                    {/* Clearing basket */}
                    <button 
                        onClick={() => this.props.clearBasket()}
                        className="cart__clear-button"
                    >
                        <i className="cart__clear-icon far fa-trash-alt"></i>clear basket
                    </button>
                    {/* Rendering list of ordered products */}
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
                                        {/* Rendering buttons */}
                                        <button
                                            onClick={() => this.props.addToBasket(product)}
                                            className="cart__button-icon"
                                        >
                                            <i className="cart__icon fas fa-plus"></i>
                                        </button>
                                        <span className="cart__amount">{product.amount}</span>
                                        <button
                                            onClick={() => this.props.decreaseProductAmount(product)}
                                            className="cart__button-icon"
                                        >
                                            <i className="cart__icon fas fa-minus"></i>
                                        </button>
                                        <button
                                            onClick={() => this.props.removeFromBasket(product)}
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
                    {/* Rendering summary container */}
                    <div className="cart__summary">
                        <span className="cart__total-items">Total items: {this.props.totalItems}</span>
                        {/* Input for entering discount code */}
                        <form onSubmit={this.handleDiscount} className="cart__discounts">
                            <input type="text" onChange={this.handleDiscountCodeEntering} value={this.state.codeEntered}/>
                            <input type="submit" value="submit" className={"cart__button-text " + discountButton}/>
                        </form>
                        <span className="cart__discount-text">{discountText}</span>
                        {/* Total cost and order button */}
                        <span className="cart__total-cost">
                            Total cost: 
                            <span>
                                {
                                    parseFloat(this.props.totalCost).toFixed(2)
                                }
                            </span>
                        </span>
                        {this.renderOrderButton()}
                    </div>
                </div>
            </div>
        )
    }
};

//Mapping state, dispatch and connecting it with component
const mapStateToProps = store => ({
    basket: store.basketReducer.basket,
    totalCost: store.basketReducer.totalCost,
    totalItems: store.basketReducer.totalItems,
    discount: store.basketReducer.discount
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
)(Basket);