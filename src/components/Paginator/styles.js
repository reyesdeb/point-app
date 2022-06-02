import styled from 'styled-components';
import arrowLeft from 'assets/icons/arrow-left.svg';
import arrowRight from 'assets/icons/arrow-right.svg';
import { colors, font } from 'theme';

const styles = {
    Container: styled.div`
        width: 100%;
        max-width: 1176px;
        display: flex;
        justify-content: space-between;
        padding: 60px 0 24px;
        border-bottom: 1px solid ${colors.commonGrey};
    `,
    LeftWrapper: styled.div`
        display: flex;
    `,
    Page: styled.div`
        color: ${colors.darkGrey};
        font-size: ${font.medium};
        line-height: ${font.xlarge};
        letter-spacing: -0.15px;
    `,
    Button: styled.span`
        cursor: pointer;
        width: 46px;
        height: 46px;
        &:after {
            content: '';
            display: inline-block;
            background-image: url(${({ left }) => (left ? arrowLeft : arrowRight)});
            background-repeat: no-repeat;
            background-size: 46px;
            width: 46px;
            height: 46px;
            margin-left: 12px;
        }
    `
};

export default styles;
