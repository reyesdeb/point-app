import React from 'react';
import styles from './styles';

const Filters = () => (
    <styles.Container>
        <styles.Text> Sort by:</styles.Text>
        {['Most recent', 'Lowest Price', 'Highest Price'].map((text, index) => (
            <styles.Button key={index} active="">
                <styles.Text active="">{text}</styles.Text>
            </styles.Button>
        ))}
    </styles.Container>
);

export default Filters;
