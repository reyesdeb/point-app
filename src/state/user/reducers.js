import * as types from './types';

const initialState = {
    userData: {
        points: 0
        // redeemHistory:[]
    }
};
// history get?
export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                userData: action.userData
            };
        case types.ADD_POINTS:
            return {
                ...state,
                userData: { ...state.userData, points: action.newPoints }
            };
        default:
            return state;
    }
};
