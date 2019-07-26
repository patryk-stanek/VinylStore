import React from 'react';
import { searchProducts, getProducts } from '../../modules/Product/Product.actions';

class Searchbar extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    search(event) {
        this.props.dispatch(searchProducts(event.target.value));
    }

    render() {
        return (
            <input type='text' onChange={this.search.bind(this)} />
        )
    }
}

export default Searchbar;