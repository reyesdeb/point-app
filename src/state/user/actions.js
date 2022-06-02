import { axiosInstance } from 'api';
import * as types from './types';

const fetchUserDataSuccess = (userData) => ({
    type: types.FETCH_USER_DATA_SUCCESS,
    userData
});

const addPoints = (newPoints) => ({
    type: types.ADD_POINTS,
    newPoints
});

export const fetchUserData = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get('/user/me');

        dispatch(fetchUserDataSuccess(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const fetchPoints = (amount) => async (dispatch) => {
    try {
        const response = await axiosInstance.post('/user/points', { amount });

        dispatch(addPoints(response.data['New Points']));
    } catch (error) {
        console.log(error);
    }
};

export const redeem = (productId) => async (dispatch) => {
    try {
        await axiosInstance.post('/redeem', { productId });

        dispatch(fetchUserData());
    } catch (error) {
        console.log(error);
    }
};
