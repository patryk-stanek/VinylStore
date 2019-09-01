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
            //Array for shown products
            searchedProducts: []
        };
    }

    componentDidMount() {
        //Passing props with searched product to component state
        this.setState({searchedProducts: this.props.searchedProducts});
    }

    componentWillReceiveProps() {
        this.setState({searchedProducts: this.props.searchedProducts});
    }

    render() {
        return (
            <div className="results">
                <h1 className="results__header">Search Results</h1>
                <div className="results__container">
                    {
                        //Mapping searched products array to components
                        this.state.searchedProducts.map(product => {
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