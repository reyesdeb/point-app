import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Catalog from '../Catalog';
import header from 'assets/header.png';

const Layout = () => (
    <>
        <Header />
        {/* ver esto que está hardcodeado */}
        <Banner image={header} text="Electronics" />
        <Catalog />
    </>
);

export default Layout;
