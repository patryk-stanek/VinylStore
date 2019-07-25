import React from 'react';

import './Product.scss';

const Product = props => {
    return (
        <div className='Product'>
            <span className='Product__name'>{props.name}</span>
            <span className='Product__price'>{props.price}</span>
        </div>
    )
}

export default Product;