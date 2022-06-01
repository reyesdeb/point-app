import { axiosInstance } from 'api';
import * as types from './types';

const fetchDataSuccess = (products) => ({
    type: types.FETCH_DATA_SUCCESS,
    products
});

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get('/products');

        dispatch(fetchDataSuccess(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const sortBy = (sort) => (dispatch, getState) => {
    const { products: productsState } = getState();
    const { products } = productsState;

    const sortedProducts = sort(products);

    dispatch(fetchDataSuccess(sortedProducts));
};

// ?
export const sortByDefault = () => (dispatch) => dispatch(sortBy((products) => products));

export const sortByCostDescendant = () => (dispatch) =>
    dispatch(sortBy((products) => products.sort((a, b) => a.cost - b.cost)));

export const sortByCostAscendant = () => (dispatch) =>
    dispatch(sortBy((products) => products.sort((a, b) => b.cost - a.cost)));
