import React from 'react';
import { connect } from 'react-redux';
import { getProduct } from './Product.actions';
import ProductDetails from './ProductDetails';

class ProductDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getProduct(this.props.match.params.id));
    }

    render() {
        return (
            <ProductDetails product={this.props.selectedProduct} />
        )
    }
}

const mapStateToProps = store => ({
    selectedProduct: store.productsReducer.selectedProduct
});

export default connect(mapStateToProps)(ProductDetailsContainer);