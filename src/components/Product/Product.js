//Importing methods
import React from "react";

//Importing styles
import "./Product.scss";

//Product container
const Product = props => {
    return (
        <div className="product">
            <img 
                className="product__cover"
                src={props.product.cover}
                alt={props.product.name + "_cover"}
            />
            <div className="product__details">
                <span className="product__name">{props.product.name}</span>
                <span className="product__artist">{props.product.artist}</span>
                <span className="product__price">{props.product.price}</span>
            </div>
        </div>
    )
}

export default Product;