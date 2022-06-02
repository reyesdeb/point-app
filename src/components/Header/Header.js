import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'state/user';
import Image from '../Image';
import logo from 'assets/logo.svg';
import styles from './styles';

const Header = () => {
    const dispatch = useDispatch();
    const pointsToAdd = [1000, 5000, 7500];
    const userState = useSelector(({ user }) => user);
    const {
        userData: { name, points }
    } = userState;

    useEffect(() => {
        dispatch(actions.fetchUserData());
    }, []);

    return (
        <styles.Header>
            <styles.CenterContainer>
                <Image src={logo} width={39} height={36} alt="aerolab" />
                <styles.PointsManager>
                    {pointsToAdd.map((points, index) => (
                        <styles.AddPoints
                            key={index}
                            onClick={() => dispatch(actions.fetchPoints(points))}>
                            <styles.Text>{`+ ${points}`}</styles.Text>
                        </styles.AddPoints>
                    ))}
                    <styles.Text>{name}</styles.Text>
                    <styles.Points>
                        <styles.Text>{points}</styles.Text>
                    </styles.Points>
                </styles.PointsManager>
            </styles.CenterContainer>
        </styles.Header>
    );
};

export default Header;
