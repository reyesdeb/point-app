import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { actions } from 'state/products';
import Paginator from 'components/Paginator';
import Sorting from 'components/Sorting';
import Product from 'components/Product';
import styles from './styles';

const Catalog = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const activeSorting = searchParams.get('sortBy') || '';
    const page = searchParams.get('page') || '';
    const productsState = useSelector(({ products }) => products);
    const { filteredProducts = [], products = [] } = productsState;

    useEffect(() => {
        dispatch(actions.fetchProductsData(activeSorting, page));
    }, []);

    return (
        <>
            <styles.StickyWrapper>
                <Paginator
                    changePage={actions.changePage}
                    total={products.length}
                    itemsPerPage={16}>
                    <Sorting />
                </Paginator>
            </styles.StickyWrapper>
            <styles.MainContainer>
                <styles.ProductsGrid>
                    {filteredProducts.map((item, index) => (
                        <Product key={index} {...item} />
                    ))}
                </styles.ProductsGrid>
                <Paginator
                    changePage={actions.changePage}
                    total={products.length}
                    itemsPerPage={16}
                />
            </styles.MainContainer>
        </>
    );
};

export default Catalog;
