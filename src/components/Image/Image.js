import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Image = ({ src, alt, ...props }) => {
    const [error, setError] = useState(false);
    const { width = 160, height } = props;
    const urlDefault = `https://via.placeholder.com/${width}x${height || width}.png`;

    return (
        <styles.Image
            src={error ? urlDefault : src}
            alt={alt}
            onError={() => setError(true)}
            {...props}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
};

export default Image;
