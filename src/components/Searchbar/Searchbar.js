import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { searchProducts, getProducts } from '../../modules/Product/Product.actions';

class Searchbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fireRedirect: false,
            searchedProduct: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getProducts());
        // console.log(this.props);
    }

    cleanInput() {
        document.getElementById('Form').reset();
    }

    handleChange(event) {
        this.setState({searchedProduct: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(searchProducts(this.state.searchedProduct));
        console.log(this.props.visibleProducts);
        this.setState({fireRedirect: true});
        this.cleanInput();

    }

    render() {
        const { from } = '/';
        const { fireRedirect } = this.state;

        return (
            <div>
                <form id='Form' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Search products...' onChange={this.handleChange} />
                </form>
                {
                    fireRedirect && (
                        <Redirect to={from || `/products/product/${this.props.visibleProducts[0].id}`}/>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = store => ({
    products: store.productsReducer.products,
    visibleProducts: store.productsReducer.visibleProducts
});

export default connect(mapStateToProps)(Searchbar);