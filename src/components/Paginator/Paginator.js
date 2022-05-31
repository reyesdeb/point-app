import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

{
    /* sacar esto que está hardcodeado */
}
const pages = '32 of 32';
const Footer = ({ children }) => (
    <styles.Container>
        <styles.LeftWrapper>
            <styles.Page>{`${pages} products`}</styles.Page>
            {children}
        </styles.LeftWrapper>
        {/* <styles.Page>{`${pages} products`}</styles.Page> */}
    </styles.Container>
);

Footer.propTypes = {
    children: PropTypes.node
};
export default Footer;
