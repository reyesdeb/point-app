import React from 'react';
import Image from '../Image';
import logo from 'assets/logo.svg';
import styles from './styles';

const Header = () => (
    <styles.Header>
        <styles.CenterContainer>
            <Image src={logo} width={39} height={36} alt="aerolab" />
            <styles.PointsManager>
                {/* sacar esto */}
                <styles.Text>{'Jhon Kite'}</styles.Text>
                <styles.Points>
                    <styles.Text>{'1000'}</styles.Text>
                </styles.Points>
            </styles.PointsManager>
        </styles.CenterContainer>
    </styles.Header>
);

export default Header;
