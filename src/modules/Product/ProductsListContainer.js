import React from 'react';
import { connect } from 'react-redux';
import ProductsList from './ProductsList';
import { getProducts } from './Product.actions';

class ProductsListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getProducts());
    }

    render() {
        return (
            <div>
                <ProductsList products={this.props.products} />
            </div>
        )
    }
}

const mapStateToProps = store => ({
    products: store.productsReducer.products
});

export default connect(mapStateToProps)(ProductsListContainer);