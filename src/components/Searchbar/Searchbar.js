//Importing methods
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

//Importing actions for Searchbar states
import { searchProducts, getProducts } from "../Product/Product.actions";

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

    componentDidMount() {
        this.props.dispatch(getProducts());//Dispatching products list
    }

    handleChange(event) {
        this.setState({searchedProduct: event.target.value});//Passing input value to this.state.searchedProduct
    }

    handleSubmit(event) {
        event.preventDefault();//Block default behavior
        this.setState({fireRedirect: false});//Set fireRedirect back to false and allow to make a new search
    }

    handleSearch(e) {
        if (e.key === 'Enter') {
            this.props.dispatch(searchProducts(this.state.searchedProduct));//Dispatching searched term
            this.setState({fireRedirect: true});//Changing value responsible for redirecting management 
            document.getElementById("form").reset();//Clearing input
        }
    }

    render() {
        const { from } = "/";
        const { fireRedirect } = this.state;

        return (
            <div>
                <form id="form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search products..."
                        onChange={this.handleChange}
                        onKeyPress={this.handleSearch}
                    />
                </form>
                {
                    fireRedirect && (
                        <Redirect to={from || `/search`}/>
                    )
                }
            </div>
        )
    }
}

//Maping global state
const mapStateToProps = store => ({
    products: store.productsReducer.products,
    visibleProducts: store.productsReducer.visibleProducts
});

//Connecting state method with component
export default connect(mapStateToProps)(Searchbar);