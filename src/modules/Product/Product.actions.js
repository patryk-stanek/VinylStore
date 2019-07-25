export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const SET_CATEGORY = 'SET_CATEGORY';

export function getProduct(id) {
    return {
        type: GET_PRODUCT,
        id
    }
}

export function getProducts() {
    return {
        type: GET_PRODUCTS
    }
}

export function searchProducts(searchText) {
    return {
        type: SEARCH_PRODUCTS,
        searchText
    }
}

export function setCategory(name) {
    return {
        type: SET_CATEGORY,
        name
    }
}