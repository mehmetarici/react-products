import { ADD_TO_BASKET, DELETE_FROM_BASKET, SEARCH_PRODUCTS, SET_PRODUCTS, SORT_PRODUCTS } from "./actionTypes";

export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        products
    };
}

export function searchProducts(searchText) {
    return {
        type: SEARCH_PRODUCTS,
        searchText
    };
}

export function sortProducts(sortBy) {
    return {
        type: SORT_PRODUCTS,
        sortBy
    };
}

export function addToBasket(productId) {
    return {
        type: ADD_TO_BASKET,
        productId
    };
}

export function deleteFromBasket(productId) {
    return {
        type: DELETE_FROM_BASKET,
        productId
    };
}
