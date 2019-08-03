//Importing methods
import React from "react";
import { connect } from "react-redux";

import {
    addToBasket,
    removeFromBasket,
    decreaseProductAmount,
    clearBasket } from "../../components/Basket/Basket.actions";

//Basket component
class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product1: {
                "name": "Ball",
                "category": "Home",
                "price": "€9.99",
                "stocked": true,
                "id": 1
            },
            product2: {
                "name": "wall",
                "category": "Home",
                "price": "€2.99",
                "stocked": true,
                "id": 2
            },
        }

        this.x = this.x.bind(this);
        this.y = this.y.bind(this);
        this.z = this.z.bind(this);
        this.v = this.v.bind(this);
    }

    x(val) {
        this.props.dispatch(addToBasket(val));
    }

    y(val) {
        this.props.dispatch(removeFromBasket(val));
    }

    v(val) {
        this.props.dispatch(decreaseProductAmount(val));
    }

    z() {
        this.props.dispatch(clearBasket());
    }

    render() {
        return (
            <div>
                <h1>/basket</h1>
                <button onClick={() => this.x(this.state.product1)}>dumm1</button>
                <button onClick={() => this.x(this.state.product2)}>dumm2</button>
                <button onClick={() => console.log(this.props.basket)}>console</button>
                <button onClick={() => console.log(this.props.totalCost)}>cost</button>
                <button onClick={() => this.z()}>clear basket</button><br/>
                <span>total items: {this.props.totalItems}</span>
                <div>
                    {
                        this.props.basket.map(product => {
                            return <div>
                                <span id={product.id}>
                                    {product.name}
                                    <span> - </span>
                                    <span>{product.amount}</span>
                                    <button onClick={() => this.y(product)}>delete</button>
                                    <button onClick={() => this.x(product)}>add One</button>
                                    <button onClick={() => this.v(product)}>remove One</button>
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