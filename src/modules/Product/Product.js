//Importing methods
import React from 'react';

//Importing styles
import './Product.scss';

//Product container
const Product = props => {
    return (
        <div className='Product'>
            <span className='Product__name'>{props.product.name}</span>
            <span className='Product__price'>{props.product.price}</span>
        </div>
    )
}

export default Product;