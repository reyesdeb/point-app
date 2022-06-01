import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'state/products';
import Paginator from 'components/Paginator';
import Filters from 'components/Filters';
import Product from 'components/Product';
import styles from './styles';

const Catalog = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchProducts());
    }, []);

    const productsState = useSelector(({ products }) => products);
    const { products = [] } = productsState;

    return (
        <>
            <styles.StickyWrapper>
                <Paginator>
                    <Filters />
                </Paginator>
            </styles.StickyWrapper>
            <styles.MainContainer>
                <styles.ProductsGrid>
                    {products.map((item, index) => (
                        <Product key={index} {...item} />
                    ))}
                </styles.ProductsGrid>
                <Paginator />
            </styles.MainContainer>
        </>
    );
};

export default Catalog;
