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
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <ProductDetails product={this.props.selectedProduct} />
        )
    }
};

//Mapping state and connecting it with component
const mapStateToProps = store => ({
    selectedProduct: store.productsReducer.selectedProduct
});

export default connect(mapStateToProps)(ProductDetailsContainer);