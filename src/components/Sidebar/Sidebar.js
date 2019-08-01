//Importing methods
import React from "react";
import { connect } from "react-redux"

//Importing actions for Searchbar states
import { sortProductsByName, sortProductsByPrice } from "../Product/Product.actions";

//Sidebar component
class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.handleSortFirstToLast = this.handleSortFirstToLast.bind(this);
        this.handleSortLastToFirst = this.handleSortLastToFirst.bind(this);
        this.handleSortLowToHigh = this.handleSortLowToHigh.bind(this);
        this.handleSortHighToLow = this.handleSortHighToLow.bind(this);
    }

    handleSortFirstToLast() {
        this.props.dispatch(sortProductsByName(1));
        this.props.handleUpdate();
    }

    handleSortLastToFirst() {
        this.props.dispatch(sortProductsByName(0));
        this.props.handleUpdate();
    }

    handleSortLowToHigh() {
        this.props.dispatch(sortProductsByPrice(1));
        this.props.handleUpdate();
    }

    handleSortHighToLow() {
        this.props.dispatch(sortProductsByPrice(0));
        this.props.handleUpdate();
    }

    render() {
        return (
            <div>
                <span>Sort by:</span>
                <ul>
                    <button onClick={this.handleSortFirstToLast}>Name A-Z</button><br/>
                    <button onClick={this.handleSortLastToFirst}>Name Z-A</button><br/>
                    <button onClick={this.handleSortLowToHigh}>Price low-high</button><br/>
                    <button onClick={this.handleSortHighToLow}>Price high-low</button> 
                </ul>
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