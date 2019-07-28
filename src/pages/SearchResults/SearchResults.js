//Importing methods
import React from 'react';
import { connect } from 'react-redux';

//Importing component
import { Link } from 'react-router-dom';
import Product from '../../modules/Product/Product';

//SearchResults component
class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleProducts: []//Array for shown products
        }
    }

    componentDidMount() {
        this.setState({visibleProducts: this.props.visibleProducts});//Passing props with searched product to component state
    }

    render() {
        return (
            <div>
                <h1>/SearchResults</h1>
                <div>
                    {
                        this.state.visibleProducts.map(product => {//Mapping searched products array to components
                            return(
                                <h2>
                                    <Link to={'../catalog/product/' + product.id}>
                                        <Product product={product} />
                                    </Link>
                                </h2>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

//Mapping global component
const mapStateToProps = store => ({
    products: store.productsReducer.products,
    visibleProducts: store.productsReducer.visibleProducts
});

//Connecting state method to component
export default connect(mapStateToProps)(SearchResults);