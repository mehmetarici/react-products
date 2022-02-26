import {
    ADD_TO_BASKET,
    DELETE_FROM_BASKET,
    FILTER_BRAND_PRODUCTS,
    FILTER_COLOR_PRODUCTS,
    SEARCH_PRODUCTS,
    SET_PAGINATION,
    SET_PRODUCTS,
    SORT_PRODUCTS
} from "./actionTypes";

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

export function filterColorProducts(color) {
    return {
        type: FILTER_COLOR_PRODUCTS,
        color
    };
}

export function filterBrandProducts(brand) {
    return {
        type: FILTER_BRAND_PRODUCTS,
        brand
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

export function setPagination(pagination) {
    return {
        type: SET_PAGINATION,
        pagination
    };
}
