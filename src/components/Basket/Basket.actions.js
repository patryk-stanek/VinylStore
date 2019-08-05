//Action constans
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const DECREASE_PRODUCT_AMOUNT = "DECREASE_PRODUCT_AMOUNT"
export const CLEAR_BASKET = "CLEAR_BASKET";

//Adding a single product to the basket
export function addToBasket(product) {
    return {
        type: ADD_TO_BASKET,
        product,
        amount: 1
    }
}

//Removing a product from the basket
export function removeFromBasket(product) {
    return {
        type: REMOVE_FROM_BASKET,
        product
    }
}

//Decrease amount of products in the basket
export function decreaseProductAmount(product) {
    return {
        type: DECREASE_PRODUCT_AMOUNT,
        product
    }
}

//Clear basket
export function clearBasket() {
    return {
        type: CLEAR_BASKET
    }
}