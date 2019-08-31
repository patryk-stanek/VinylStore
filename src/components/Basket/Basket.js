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
        this.handleCodeEnter = this.handleCodeEnter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //setting discount amount from product reducer
        //setting modal on false
        this.setState({
            discount: this.props.discount,
            modal: false
        })
    }

    handleCodeEnter(event) {
        //setting entered discount code
        //entered code is transformed to lower letters
        this.setState({
            codeEntered: event.target.value.toLowerCase()
        })
    }

    handleDiscount(event) {
        event.preventDefault();
        //loop for checking if entered code is placed in databse and there"s isn"t any discount active;
        for (let i=0; i<discountCodes.length; i++) {
            if(discountCodes[i].rabatCode === this.state.codeEntered && this.state.discount === 0) {
                //setting discount state
                this.setState({
                    discount: discountCodes[i].discount
                });
                //calculating discount based on value in databse
                this.props.calculateDiscount(discountCodes[i].discount);
            } 
        }
    }

    handleSubmit() {
        //clearing basket after "placing order"
        this.setState({
            codeEntered: "",
            modal: true
        })
        this.props.clearBasket();
    }

    handleModalClose() {
        //closing modal
        this.setState({
            modal: false
        })
    }

    render() {
        //if there"s a discount in state button is disabled
        const discountButton = this.state.discount === 0 ? "cart__button-text--active" : "cart__button-text--inactive";
        //if there"s a discount in state show text
        const discountText = this.state.discount > 0 ? `You have ${this.state.discount * 100}% discount` : "";
        //condition for showing ModalBox with custom text
        const modalBox = this.state.modal === true ? <ModalBox handleModalClose={this.handleModalClose.bind(this)} description={this.state.modalDescription}/> : "";

        return (
            <div className="cart">
                {modalBox}
                <h1 className="cart__header">Your Cart</h1>
                <div className="cart__container">
                    <button 
                        onClick={() => this.props.clearBasket()}
                        className="cart__clear-button"
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
                    <div className="cart__summary">
                        <span className="cart__total-items">Total items: {this.props.totalItems}</span>
                        <form onSubmit={this.handleDiscount} className="cart__discounts">
                            <input type="text" onChange={this.handleCodeEnter} value={this.state.codeEntered}/>
                            <input type="submit" value="submit" className={"cart__button-text " + discountButton}/>
                        </form>
                        <span className="cart__discount-text">{discountText}</span>
                        <span className="cart__total-cost">
                            Total cost: 
                            <span>
                                {
                                    parseFloat(this.props.totalCost).toFixed(2)
                                }
                            </span>
                        </span>
                        <button className="cart__button-text cart__button-text--submit" onClick={() => this.handleSubmit()}>Place order!</button>
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