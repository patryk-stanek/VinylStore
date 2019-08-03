export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const DECREASE_PRODUCT_AMOUNT = "DECREASE_PRODUCT_AMOUNT"
export const CLEAR_BASKET = "CLEAR_BASKET";

export function addToBasket(product, amount) {
    return {
        type: ADD_TO_BASKET,
        product,
        amount: amount || 1
    }
}

export function removeFromBasket(product) {
    return {
        type: REMOVE_FROM_BASKET,
        product
    }
}

export function decreaseProductAmount(product) {
    return {
        type: DECREASE_PRODUCT_AMOUNT,
        product
    }
}

export function clearBasket() {
    return {
        type: CLEAR_BASKET
    }
}