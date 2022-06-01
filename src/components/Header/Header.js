import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'state/user';
import Image from '../Image';
import logo from 'assets/logo.svg';
import styles from './styles';

const Header = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchUserData());
    }, []);

    const userState = useSelector(({ user }) => user);
    const {
        userData: { name, points }
    } = userState;

    return (
        <styles.Header>
            <styles.CenterContainer>
                <Image src={logo} width={39} height={36} alt="aerolab" />
                <styles.PointsManager>
                    <styles.Text>{name}</styles.Text>
                    <styles.Points>
                        <styles.Text>{points}</styles.Text>
                    </styles.Points>
                    <button onClick={() => dispatch(actions.fetchPoints(1000))}>
                        <styles.Text>1000</styles.Text>
                    </button>
                    <button onClick={() => dispatch(actions.fetchPoints(5000))}>
                        <styles.Text>5000</styles.Text>
                    </button>
                    <button onClick={() => dispatch(actions.fetchPoints(7500))}>
                        <styles.Text>7500</styles.Text>
                    </button>
                </styles.PointsManager>
            </styles.CenterContainer>
        </styles.Header>
    );
};

export default Header;
