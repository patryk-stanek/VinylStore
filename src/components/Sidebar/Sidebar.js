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
    handleSortByName(option) {
        this.props.sortProductsByName(option);
        this.props.handleUpdate();
    }

    //Dispatching sorting products by chosen option and updating view
    handleSortByPrice(option) {
        this.props.sortProductsByPrice(option);
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

const mapDispatchToProps = dispatch => ({
    sortProductsByName: option => dispatch(sortProductsByName(option)),
    sortProductsByPrice: option => dispatch(sortProductsByPrice(option))
})

//Connecting state method with component
export default connect(
    mapStateToProps,
    mapDispatchToProps)
(Sidebar);