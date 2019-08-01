//Importing methods
import React from "react";
import { connect } from "react-redux";

//Importing component
import { Link } from "react-router-dom";
import Product from "../../components/Product/Product";

//SearchResults component
class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedProducts: []//Array for shown products
        }
    }

    componentDidMount() {
        this.setState({searchedProducts: this.props.searchedProducts});//Passing props with searched product to component state
    }

    componentWillReceiveProps() {
        this.setState({searchedProducts: this.props.searchedProducts});
    }

    render() {
        return (
            <div>
                <h1>/SearchResults</h1>
                <div>
                    {
                        this.state.searchedProducts.map(product => {//Mapping searched products array to components
                            return(
                                <h2>
                                    <Link to={"../catalog/product/" + product.id}>
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
    searchedProducts: store.productsReducer.searchedProducts
});

//Connecting state method to component
export default connect(mapStateToProps)(SearchResults);