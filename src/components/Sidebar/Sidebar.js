//Importing methods
import React from "react";
import { connect } from "react-redux"

//Importing actions for Searchbar states
import { sortProductsByName, sortProductsByPrice } from "../Product/Product.actions";

//Sidebar component
class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.handleSortByName = this.handleSortByName.bind(this);
        this.handleSortByPrice = this.handleSortByPrice.bind(this);
    }

    //Dispatching sorting products by chosen option and updating view
    handleSortByName(value) {
        this.props.dispatch(sortProductsByName(value));
        this.props.handleUpdate();
    }

    //Dispatching sorting products by chosen option and updating view
    handleSortByPrice(value) {
        this.props.dispatch(sortProductsByPrice(value));
        this.props.handleUpdate();
    }

    render() {
        return (
            <div>
                <span>Sort by:</span><br/>
                <button onClick={() => this.handleSortByName(1)}>Name A-Z</button><br/>
                <button onClick={() => this.handleSortByName(0)}>Name Z-A</button><br/>
                <button onClick={() => this.handleSortByPrice(1)}>Price low-high</button><br/>
                <button onClick={() => this.handleSortByPrice(0)}>Price high-low</button> 
            </div>
        )
    }
}

//Maping global state
const mapStateToProps = store => ({
    visibleProducts: store.productsReducer.visibleProducts
});

//Connecting state method with component
export default connect(mapStateToProps)(Sidebar);