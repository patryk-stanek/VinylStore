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
            fireRedirect: false,//Value required for redirecting after pressing enter
            searchedProduct: " ",//Value for searched term
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        this.setState({searchedProduct: event.target.value});//Passing input value to this.state.searchedProduct
    }

    handleSubmit(event) {
        event.preventDefault();//Block default behavior
        this.setState({fireRedirect: false});//Set fireRedirect back to false and allow to make a new search
    }

    handleSearch(event) {
        if (event.key === 'Enter') {
            this.props.searchProducts(this.state.searchedProduct);
            this.setState({fireRedirect: true});//Changing value responsible for redirecting management 
            document.getElementById("form").reset();//Clearing input
        }
    }

    render() {
        const { from } = "/";
        const { fireRedirect } = this.state;

        return (
            <div className="searchbar">
                <form id="form" onSubmit={this.handleSubmit} className="form__container">
                    <input
                        type="text"
                        placeholder="Search products..."
                        onChange={this.handleChange}
                        onKeyPress={this.handleSearch}
                        className="searchbar__input"
                        
                    />
                    <i className="searchbar__icon fas fa-search"></i>
                </form>
                {
                    fireRedirect && (
                        <Redirect to={from || `/search`} />
                    )
                }
            </div>
        )
    }
}

//Maping global state
const mapStateToProps = store => ({
    products: store.productsReducer.products,
    searchedProducts: store.productsReducer.searchedProducts
});

const mapDispatchToProps = dispatch => ({
    searchProducts: event => dispatch(searchProducts(event)),
})

//Connecting state method with component
export default connect(
    mapStateToProps,
    mapDispatchToProps)(Searchbar);