import { ADD_TO_BASKET, DELETE_FROM_BASKET, SEARCH_PRODUCTS, SET_PRODUCTS, SORT_PRODUCTS } from "./actionTypes";

const initialState = {
    products: [],
    searchText: null,
    sortBy: null
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

        default:
            return state;
    }
};

export default reducer;
