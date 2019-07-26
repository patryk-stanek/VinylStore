import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const ProductsList = props => (
    <div className='ProductsList'>
        {props.products.map(product => {
                return (
                    <div className='ProductsList__single' key={product.id}>
                        <Link to={'products/product/' + product.id}>
                            <Product product={product} />
                        </Link>
                    </div>
                )
            })}
    </div>
)

export default ProductsList;