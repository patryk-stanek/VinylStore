//Importing methods
import React from 'react';
import { connect } from 'react-redux';

//Importing actions
import { getProducts } from './Product.actions';

//Importing components
import ProductsList from './ProductsList';

//ProductsListContainer component
class ProductsListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getProducts());//Dispatching products list
    }

    render() {
        return (
            <div>
                <ProductsList products={this.props.products} />
            </div>
        )
    }
}

//Maping global state
const mapStateToProps = store => ({
    products: store.productsReducer.products
});

//Connecting state method with component
export default connect(mapStateToProps)(ProductsListContainer);