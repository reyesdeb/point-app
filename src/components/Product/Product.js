import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'state/user';
import PropTypes from 'prop-types';
import Image from '../Image';
import styles from './styles';

const Product = ({ _id, name, cost, category, img }) => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
    const { userData } = useSelector(({ user }) => user);

    const { points } = userData;
    const difference = points - cost;
    const available = difference >= 0;

    return (
        <styles.Product onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            {active && available && (
                <styles.Overlay>
                    <styles.Points>{cost}</styles.Points>
                    <styles.RedeemButton onClick={() => dispatch(actions.redeem(_id))}>
                        Redeem now
                    </styles.RedeemButton>
                </styles.Overlay>
            )}
            <styles.FlagsWrapper>
                {available ? (
                    <styles.Flag active={active} />
                ) : (
                    <styles.DifferenceFlag>{`You need ${difference * -1}`}</styles.DifferenceFlag>
                )}
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
    _id: PropTypes.string,
    name: PropTypes.string,
    cost: PropTypes.number,
    category: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string,
        hdUrl: PropTypes.string
    })
};

export default Product;
