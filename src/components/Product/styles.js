import styled from 'styled-components';
import buyBlue from 'assets/icons/buy-blue.svg';
import buyWhite from 'assets/icons/buy-white.svg';
import coin from 'assets/icons/coin.svg';
import { colors, font } from 'theme';

const styles = {
    Product: styled.div`
        position: relative;
        width: 276px;
        height: 276px;
        padding: 18px 24px;
        background: ${colors.white};
        box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform ease 300ms;
        &:hover {
            transform: translate(0, -12px);
            box-shadow: 9px 7px 26px 1px rgba(0, 0, 0, 0.53);
        }
    `,
    Overlay: styled.div`
        position: absolute;
        left: 0;
        top: 0;
        width: 276px;
        height: 276px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 24px 18px;
        z-index: 1;
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.8;
            z-index: -1;
            background-image: linear-gradient(-180deg, #0ad4fa 0%, #25bbf1 100%);
        }
    `,
    Points: styled.span`
        display: flex;
        align-items: center;
        color: ${colors.white};
        font-size: ${font.large};
        letter-spacing: -0.08px;
        &:after {
            content: '';
            display: inline-block;
            background-image: url(${coin});
            background-repeat: no-repeat;
            background-size: 26px;
            width: 26px;
            height: 26px;
            margin-left: 10px;
        }
    `,
    RedeemButton: styled.button`
        width: 100%;
        height: 42px;
        margin-top: 12px;
        background: ${colors.white};
        border-radius: 100px;
        color: ${colors.darkGrey};
        font-size: ${font.small};
        letter-spacing: -0.04px;
        text-align: center;
        cursor: pointer;
    `,
    FlagsWrapper: styled.span`
        position: absolute;
        top: 12px;
        right: 12px;
        display: flex;
        z-index: 1;
    `,
    Flag: styled.span`
        width: 42px;
        height: 42px;
        &:after {
            content: '';
            display: inline-block;
            background-image: url(${({ active }) => (active ? buyWhite : buyBlue)});
            background-repeat: no-repeat;
            background-size: contain;
            border-radius: 100%;
            width: 42px;
            height: 42px;
        }
    `,
    DifferenceFlag: styled.span`
        display: flex;
        padding: 12px 15px;
        border-radius: 100px;
        background: ${colors.darkGrey};
        opacity: 0.8;
        color: ${colors.white};
        font-size: ${font.xxsmall};
        letter-spacing: -0.03px;
        &:after {
            content: '';
            display: inline-block;
            background-image: url(${coin});
            background-repeat: no-repeat;
            background-size: 20px;
            width: 20px;
            height: 20px;
            margin-left: 6px;
        }
    `,
    ImageWrapper: styled.div`
        height: 180px;
        padding-bottom: 10px;
        margin-bottom: 19px;
        border-bottom: 1px solid ${colors.commonGrey};
        display: flex;
        justify-content: center;
    `,
    Category: styled.p`
        font-size: ${font.xsmall};
        color: ${colors.grey};
        letter-spacing: -0.04px;
    `,
    Name: styled.p`
        font-size: ${font.small};
        color: ${colors.darkGrey};
        letter-spacing: -0.04px;
    `
};

export default styles;
