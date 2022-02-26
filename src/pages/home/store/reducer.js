import { ADD_TO_BASKET, DELETE_FROM_BASKET, FILTER_BRAND_PRODUCTS, FILTER_COLOR_PRODUCTS, SEARCH_PRODUCTS, SET_PAGINATION, SET_PRODUCTS, SORT_PRODUCTS } from "./actionTypes";
import products from "../../../assets/products.json";

const initialState = {
    products: [],
    pagination: {size: 12, page: 0, pageCount: 3},
    searchText: null,
    sortBy: null,
    filterColor: null,
    filterBrand: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state, products: action.products,
            };

        case SEARCH_PRODUCTS:
            return {
                ...state,
                searchText: action.searchText
            };

        case SORT_PRODUCTS:
            return {
                ...state,
                sortBy: action.sortBy
            };

        case FILTER_COLOR_PRODUCTS:
            return {
                ...state,
                filterColor: action.color
            };

        case FILTER_BRAND_PRODUCTS:
            return {
                ...state,
                filterBrand: action.brand
            };

        case ADD_TO_BASKET:
            const addedProductIndex = state.products.findIndex(product => product.id === action.productId)
            if (addedProductIndex === -1)
                return state;

            return {
                ...state,
                products: [
                    ...state.products.slice(0, addedProductIndex),
                    {...state.products[addedProductIndex], inBasket: true},
                    ...state.products.slice(addedProductIndex + 1),
                ]
            };

        case DELETE_FROM_BASKET:
            const deletedProductIndex = state.products.findIndex(product => product.id === action.productId)
            if (deletedProductIndex === -1)
                return state;

            return {
                ...state,
                products: [
                    ...state.products.slice(0, deletedProductIndex),
                    {...state.products[deletedProductIndex], inBasket: false},
                    ...state.products.slice(deletedProductIndex + 1),
                ]
            };
        case SET_PAGINATION:
            const {size, page} = action.pagination;
            const storageProducts = JSON.parse(localStorage.getItem("products"));
            const paginatedProducts = storageProducts.slice(size * page, size * page + size)

            return {
                ...state, products: paginatedProducts, pagination: action.pagination
            }

        default:
            return state;
    }
};

export default reducer;
