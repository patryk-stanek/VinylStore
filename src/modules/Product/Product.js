import React from 'react';

import './Product.scss';

const Product = props => {
    return (
        <div className='Product'>
            <span className='Product__name'>{props.product.name}</span>
            <span className='Product__price'>{props.product.price}</span>
        </div>
    )
}

export default Product;