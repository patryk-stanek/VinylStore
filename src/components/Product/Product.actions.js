//Action constans
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export const SORT_PRODUCTS_BY_NAME = "SORT_PRODUCTS_BY_NAME";
export const SORT_PRODUCTS_BY_ARTIST = "SORT_PRODUCTS_BY_ARTIST";
export const SORT_PRODUCTS_BY_PRICE = "SORT_PRODUCT_BY_PRICE";
export const SORT_PRODUCTS_BY_ID = "SORT_PRODUCT_BY_ID";
export const SET_CATEGORY = "SET_CATEGORY";
export const CHANGE_PAGE = "CHANGE_PAGE"

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

export function sortProductsByName(option) {
    return {
        type: SORT_PRODUCTS_BY_NAME,
        option
    }
}

export function sortProductsByArtist(option) {
    return {
        type: SORT_PRODUCTS_BY_ARTIST,
        option
    }
}

export function sortProductsByPrice(option) {
    return {
        type: SORT_PRODUCTS_BY_PRICE,
        option
    }
}

export function sortProductsById(option) {
    return {
        type: SORT_PRODUCTS_BY_ID,
        option
    }
}

// this actions is prepared for future implementation
export function setCategory(name) {
    return {
        type: SET_CATEGORY,
        name
    }
}

export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page
    }
}