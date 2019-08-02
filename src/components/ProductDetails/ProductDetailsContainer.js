//Importing methods
import React from "react";
import { connect } from "react-redux";

//Importing actions
import { getProduct } from "../Product/Product.actions";

//Importing component
import ProductDetails from "./ProductDetails";

//ProductDetailsContainer component
class ProductDetailsContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(getProduct(this.props.match.params.id));
    }

    render() {
        return (
            <ProductDetails product={this.props.selectedProduct} />
        )
    }
}

//Maping global state
const mapStateToProps = store => ({
    selectedProduct: store.productsReducer.selectedProduct
});

export default connect(mapStateToProps)(ProductDetailsContainer);