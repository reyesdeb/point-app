import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from 'state/products';
import styles from './styles';

const Filters = () => {
    const dispatch = useDispatch();
    const [activeSorting, setActiveSorting] = useState('');
    const options = ['Most recent', 'Lowest Price', 'Highest Price'];

    const sort = (name) => {
        setActiveSorting(name);
        if (name === 'Most recent') return dispatch(actions.sortByDefault());
        if (name === 'Lowest Price') return dispatch(actions.sortByCostDescendant());
        if (name === 'Highest Price') return dispatch(actions.sortByCostAscendant());
    };

    return (
        <styles.Container>
            <styles.Text> Sort by:</styles.Text>
            {options.map((name, index) => (
                <styles.Button
                    key={index}
                    onClick={() => sort(name)}
                    active={activeSorting === name}>
                    <styles.Text active={activeSorting === name}>{name}</styles.Text>
                </styles.Button>
            ))}
        </styles.Container>
    );
};

export default Filters;
