//Importing methods
import React from "react";

//Importing styles
import "./Product.scss";

//Product container
const Product = props => {
    return (
        <div className="product">
            <span className="product__name">{props.product.name}</span>
            <span className="product__price">{props.product.price}</span>
        </div>
    )
}

export default Product;