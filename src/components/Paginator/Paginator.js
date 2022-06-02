import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';

const Paginator = ({ total, itemsPerPage, changePage, children }) => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = +searchParams.get('page') || '';

    const changeParam = (actualPage) => {
        searchParams.set('page', actualPage);
        setSearchParams(searchParams);
    };

    useEffect(() => {
        if (!page) return changeParam(1);
        dispatch(changePage(page, itemsPerPage));
    }, [page]);

    return (
        <styles.Container>
            <styles.LeftWrapper>
                <styles.Page>{`${page * itemsPerPage} of ${total} products`}</styles.Page>
                {children}
            </styles.LeftWrapper>

            <div>
                {page > 1 && <styles.Button left onClick={() => changeParam(page - 1)} />}
                <styles.Button onClick={() => changeParam(page + 1)} />
            </div>
        </styles.Container>
    );
};

Paginator.propTypes = {
    total: PropTypes.number,
    itemsPerPage: PropTypes.number,
    changePage: PropTypes.func,
    children: PropTypes.node
};
export default Paginator;
