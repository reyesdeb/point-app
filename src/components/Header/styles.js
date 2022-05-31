import styled from 'styled-components';
import coin from 'assets/icons/coin.svg';
import { colors, mixins, font } from 'theme';

const styles = {
    Header: styled.header`
        height: 80px;
        background: ${colors.white};
        position: sticky;
        top: 0;
        z-index: 2;
    `,
    CenterContainer: styled.div`
        ${mixins.centerPage}
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 48px 16px 42px;
    `,
    PointsManager: styled.div`
        display: flex;
    `,
    Points: styled.button`
        height: 48px;
        padding: 0 16px;
        background: ${colors.mediumGrey};
        border-radius: 100px;
        margin-left: 18px;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:after {
            content: '';
            display: inline-block;
            background-image: url(${coin});
            background-repeat: no-repeat;
            background-size: 24px;
            width: 24px;
            height: 24px;
            margin-left: 6px;
        }
    `,
    Text: styled.span`
        color: ${colors.darkGrey};
        font-size: ${font.medium};
        line-height: ${font.xlarge};
        letter-spacing: -0.15px;
    `
};

export default styles;
