import React from 'react';

import Product from './Product';

import products from '../../utils/products.json';

export class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: products,
        }
    }

    render() {
        const productsList = this.state.products.map(data => <Product name={data.name} price={data.price} key={data.id}/>)
        return (
            <div>
                {productsList}
            </div>
        )
    }
}