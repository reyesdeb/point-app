import React from 'react';
import Paginator from 'components/Paginator';
import Filters from 'components/Filters';
import Product from 'components/Product';
import styles from './styles';

const Catalog = ({products}) => (
    <>
        <styles.StyckyWrapper>
            <styles.CenterContainer>
                <Paginator>
                    <Filters />
                </Paginator>
            </styles.CenterContainer>
        </styles.StyckyWrapper>
        <styles.CenterContainer>
            <styles.ProductsGrid>
                {products.map((item, index) => (
                    <Product key={index} />
                ))}
            </styles.ProductsGrid>
            <Paginator />
        </styles.CenterContainer>
    </>
);

export default Catalog;
