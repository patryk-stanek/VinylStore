//Action constans
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export const SORT_PRODUCTS_BY_NAME = "SORT_PRODUCTS_BY_NAME";
export const SORT_PRODUCTS_BY_ARTIST = "SORT_PRODUCTS_BY_ARTIST";
export const SORT_PRODUCTS_BY_PRICE = "SORT_PRODUCT_BY_PRICE";
export const SORT_PRODUCTS_BY_ID = "SORT_PRODUCT_BY_ID";
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

//Sorting products in database by name
export function sortProductsByName(option) {
    return {
        type: SORT_PRODUCTS_BY_NAME,
        option
    }
}

//Sorting products in database by name
export function sortProductsByArtist(option) {
    return {
        type: SORT_PRODUCTS_BY_ARTIST,
        option
    }
}

//Sorting products in database by price
export function sortProductsByPrice(option) {
    return {
        type: SORT_PRODUCTS_BY_PRICE,
        option
    }
}

//Sorting products in database by price
export function sortProductsById(option) {
    return {
        type: SORT_PRODUCTS_BY_ID,
        option
    }
}

//Changing category of products that are shown
export function setCategory(name) {
    return {
        type: SET_CATEGORY,
        name
    }
}

