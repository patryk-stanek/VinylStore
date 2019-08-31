//Importing methods
import React from "react";
import { connect } from "react-redux";

//Importing component
import { Link } from "react-router-dom";
import Product from "../Product/Product";

//Importing styles
import "./SearchResults.scss";

//SearchResults component
class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedProducts: []//Array for shown products
        };
    }

    componentDidMount() {
        this.setState({searchedProducts: this.props.searchedProducts});//Passing props with searched product to component state
    }

    componentWillReceiveProps() {
        this.setState({searchedProducts: this.props.searchedProducts});//showing products on new search while being on /searchresults
    }

    render() {
        return (
            <div className="results">
                <h1 className="results__header">Search Results</h1>
                <div className="results__container">
                    {
                        this.state.searchedProducts.map(product => {//Mapping searched products array to components
                            return(
                                <div className="results__box">
                                    <Link to={"../catalog/product/" + product.id} style={{textDecoration: "none"}}>
                                        <Product product={product} />
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
};

//Mapping state and connecting it with component
const mapStateToProps = store => ({
    products: store.productsReducer.products,
    searchedProducts: store.productsReducer.searchedProducts
});

export default connect(mapStateToProps)(SearchResults);