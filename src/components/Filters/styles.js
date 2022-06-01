import styled from 'styled-components';
import { colors, font } from 'theme';

const styles = {
    Container: styled.div`
        height: 49px;
        margin-left: 24px;
        padding-left: 24px;
        border-left: 1px solid ${colors.commonGrey};
    `,
    Text: styled.span`
        color: ${({ active }) => (active ? colors.white : colors.grey)};
        font-size: ${font.medium};
        line-height: ${font.xlarge};
        letter-spacing: -0.15px;
    `,
    Button: styled.button`
        height: 48px;
        padding: 0 24px;
        margin-left: 24px;
        border-radius: 100px;
        background: ${({ active }) => (active ? colors.darkGreen : colors.mediumGrey)};
        cursor: pointer;
    `
};

export default styles;
