//Action constans
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export const SET_CATEGORY = "SET_CATEGORY";

//Geting single product from database by it's id
export function getProduct(id) {
    return {
        type: GET_PRODUCT,
        id
    }
}

//Getting all products from databse
export function getProducts() {
    return {
        type: GET_PRODUCTS
    }
}

//Searching product in database by it's name
export function searchProducts(searchText) {
    return {
        type: SEARCH_PRODUCTS,
        searchText
    }
}

//Changing category of products that are shown
export function setCategory(name) {
    return {
        type: SET_CATEGORY,
        name
    }
}