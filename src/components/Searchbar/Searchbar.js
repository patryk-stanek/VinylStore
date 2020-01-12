//Importing methods
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

//Importing actions for Searchbar states
import { searchProducts } from "../Product/Product.actions";

//Importing styles
import "./Searchbar.scss";

//Searchbar component
class Searchbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //Value required for redirecting after pressing enter
            fireRedirect: false,
            //Value for searched term
            searchedProduct: " ",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        //Passing input value to this.state.searchedProduct
        this.setState({searchedProduct: event.target.value});
    }

    handleSubmit(event) {
        //Block default behavior
        event.preventDefault();
        //Set fireRedirect back to false and allow to make a new search
        this.setState({fireRedirect: false});
    }

    handleSearch(event) {
        if (event.key === "Enter") {
            this.props.searchProducts(this.state.searchedProduct);
            //Changing value responsible for redirecting management 
            this.setState({fireRedirect: true});
            //Clearing input
            document.getElementById("form").reset();
        }
    }

    render() {
        const { from } = "/";
        const { fireRedirect } = this.state;

        return (
            <div className="searchbar">
                <form id="form" onSubmit={this.handleSubmit} className="form__container">
                    <label htmlFor="searchbar">
                        <span>Searchbar</span>
                        {/* Input that put text in state through method and when pressing enter fire redirect method */}
                        <input
                            type="text"
                            id="searchbar"
                            placeholder="Search products..."
                            onChange={this.handleChange}
                            onKeyPress={this.handleSearch}
                            className="searchbar__input"
                        />
                    </label>
                    {/* <i className="searchbar__icon fas fa-search"></i> */}
                </form>
                {
                    fireRedirect && (
                        <Redirect to={from || `/search`} />
                    )
                }
            </div>
        )
    }
};

//Mapping state, dispatch and connecting it with component
const mapStateToProps = store => ({
    products: store.productsReducer.products,
    searchedProducts: store.productsReducer.searchedProducts
});

const mapDispatchToProps = dispatch => ({
    searchProducts: event => dispatch(searchProducts(event)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Searchbar);