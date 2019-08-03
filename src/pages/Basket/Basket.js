//Importing methods
import React from "react";
import { connect } from "react-redux"

import { addToBasket, removeFromBasket, clearBasket } from "../../components/Basket/Basket.actions";

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
    }

    x(val) {
        this.props.dispatch(addToBasket(val));
    }

    y(val) {
        this.props.dispatch(removeFromBasket(val));
    }

    z() {
        this.props.dispatch(clearBasket());
    }

    render() {
        return (
            <div>
                <h1>/basket</h1>
                <button onClick={() => this.x(this.state.product1)}>x</button>
                <button onClick={() => this.x(this.state.product2)}>x1</button>
                <button onClick={() => console.log(this.props.basket)}>console</button>
                <button onClick={() => this.z()}>z</button>
                <div>
                    {
                        this.props.basket.map(product => {
                            return <div><span id={product.id}>{product.name}<button onClick={() => this.y(product.id)}>y</button></span><br/></div>
                        })
                    }
                </div>
            </div>
        )
    }
}

//Maping global state
const mapStateToProps = store => ({
    basket: store.basketReducer.basket
});

//Connecting state method with component
export default connect(mapStateToProps)(Basket);