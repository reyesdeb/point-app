import { axiosInstance } from 'api';
import * as types from './types';

const fetchProductsDataSuccess = (products) => ({
    type: types.FETCH_PRODUCTS_DATA_SUCCESS,
    products
});

const setFilteredProducts = (filteredProducts) => ({
    type: types.SET_FILTERED_PRODUCTS,
    filteredProducts
});

export const fetchProductsData = (activeSorting, page) => async (dispatch) => {
    try {
        const response = await axiosInstance.get('/products');

        dispatch(fetchProductsDataSuccess(response.data));

        localStorage.setItem('products', JSON.stringify(response.data));

        dispatch(changePage(page, 16, activeSorting));
    } catch (error) {
        console.log(error);
    }
};

const sortByDefault = () => JSON.parse(localStorage.getItem('products'));

const sortByCostDescendant = (products) => products.sort((a, b) => a.cost - b.cost);

const sortByCostAscendant = (products) => products.sort((a, b) => b.cost - a.cost);

const sortBy = (name) => (dispatch, getState) => {
    const { products: productsState } = getState();
    const { products } = productsState;

    const sortFn = {
        'Most-recent': sortByDefault,
        'Lowest-Price': sortByCostDescendant,
        'Highest-Price': sortByCostAscendant
    };

    try {
        const sortedProducts = sortFn[name](products);

        dispatch(fetchProductsDataSuccess(sortedProducts));
        return sortedProducts;
    } catch (error) {
        console.log(error);
    }
};

export const changePage =
    (actualPage, itemsPerPage = 16, activeSorting) =>
    (dispatch, getState) => {
        const { products: productsState } = getState();
        const { products } = productsState;

        try {
            const orderedProducts = activeSorting ? dispatch(sortBy(activeSorting)) : products;
            const page = !actualPage || isNaN(actualPage) ? 1 : actualPage;
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const filteredProducts = orderedProducts.slice(start, end);

            dispatch(setFilteredProducts(filteredProducts));
        } catch (error) {
            console.log(error);
        }
    };
