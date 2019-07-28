//Import react from react
import React from "react";

//ProductDetails component
const ProductDetails = props => (
    <div className="product-details">
        <header>
            <h1>Name: {props.product.name}</h1>
        </header>
        <div className="product-details__info">
            <h2>Category: {props.product.category}</h2>
            <h2>Price: {props.product.price}</h2>
        </div>
    </div>
)

export default ProductDetails;