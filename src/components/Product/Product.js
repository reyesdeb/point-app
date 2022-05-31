import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import styles from './styles';

const Product = ({ name, category, img }) => {
    const [active, setActive] = useState(false);
    console.log(active);

    return (
        <styles.Product onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            {/* si está activo y si se puede comprar */}
            {active && (
                <styles.Overlay>
                    {/* cambiar esto */}
                    <styles.Points>{'12000'}</styles.Points>
                    <styles.RedeemButton>Redeem now</styles.RedeemButton>
                </styles.Overlay>
            )}
            <styles.FlagsWrapper>
                {/* if */}
                <styles.Flag active={active} />
                {/* <styles.DifferenceFlag>{`You need {}`}</styles.DifferenceFlag> */}
            </styles.FlagsWrapper>
            <styles.ImageWrapper>
                <Image src={img.url} alt={name} />
            </styles.ImageWrapper>
            <styles.Category>{category}</styles.Category>
            <styles.Name>{category}</styles.Name>
        </styles.Product>
    );
};

Product.propTypes = {
    // _id: PropTypes.string,
    name: PropTypes.string,
    cost: PropTypes.number,
    category: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string,
        hdUrl: PropTypes.string
    })
};

export default Product;
