import * as types from './types';

const initialState = {
    products: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                products: action.products
            };
        default:
            return state;
    }
};
