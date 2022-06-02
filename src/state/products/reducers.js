import * as types from './types';

const initialState = {
    products: [],
    filteredProducts: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS_DATA_SUCCESS:
            return {
                ...state,
                products: action.products
            };
        case types.SET_FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: action.filteredProducts
            };
        default:
            return state;
    }
};
