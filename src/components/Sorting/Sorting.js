import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { actions } from 'state/products';
import styles from './styles';

const Sorting = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const activeSorting = searchParams.get('sortBy') || '';
    const page = searchParams.get('page') || '';
    const options = ['Most-recent', 'Lowest-Price', 'Highest-Price'];

    useEffect(() => {
        if (activeSorting) dispatch(actions.changePage(page, 16, activeSorting));
    }, [activeSorting]);

    return (
        <styles.Container>
            <styles.Text> Sort by:</styles.Text>
            {options.map((name, index) => (
                <styles.Button
                    key={index}
                    onClick={() => {
                        searchParams.set('sortBy', name);
                        setSearchParams(searchParams);
                    }}
                    active={activeSorting === name}>
                    <styles.Text active={activeSorting === name}>
                        {name.replace('-', ' ')}
                    </styles.Text>
                </styles.Button>
            ))}
        </styles.Container>
    );
};

export default Sorting;
