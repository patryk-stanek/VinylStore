//Import react from react
import React from "react";

import BasketAddButton from "../BasketAddButton/BasketAddButton";

import "./ProductDetails.scss";

// ProductDetails component
const ProductDetails = props => (
    <div className="product-details">
        <header>
            <h1>Title: {props.product.name}</h1>
            <h2>Artist: {props.product.artist}</h2>
        </header>
        <div className="product-details__info">
            <h2>Category: {props.product.category}</h2>
            <h2>Price: {props.product.price}</h2>
            <img
                src={"../.." + props.product.cover}
                alt={props.product.name + "_cover"}
                className="product-details__cover"
            />
        </div>
        <BasketAddButton product={props.product}/>
    </div>
)

export default ProductDetails;