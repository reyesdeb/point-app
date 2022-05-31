import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import styles from './styles';

const Banner = ({ text, image }) => (
    <styles.Background>
        <styles.CenterContainer>
            <styles.Text>{text}</styles.Text>
            <Image src={image} alt="banner" width={1440} />
        </styles.CenterContainer>
    </styles.Background>
);

Banner.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
};

export default Banner;
