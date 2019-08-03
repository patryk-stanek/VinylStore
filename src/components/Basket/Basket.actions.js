export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const CLEAR_BASKET = "CLEAR_BASKET";

export function addToBasket(product) {
    return {
        type: ADD_TO_BASKET,
        product
    }
}

export function removeFromBasket(product) {
    return {
        type: REMOVE_FROM_BASKET,
        product
    }
}

export function clearBasket() {
    return {
        type: CLEAR_BASKET
    }
}