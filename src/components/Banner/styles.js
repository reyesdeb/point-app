import styled from 'styled-components';
import { colors, mixins, font, fontWeight } from 'theme';

const styles = {
    Background: styled.div`
        background: ${colors.green};
        height: 430px;
        position: relative;
    `,
    CenterContainer: styled.div`
        ${mixins.centerPage}
    `,
    Text: styled.h1`
        width: 100%;
        max-width: 1176px;
        color: ${colors.white};
        font-size: ${font.xxlarge};
        font-weight: ${fontWeight.bold};
        position: absolute;
        bottom: 48px;
        right: 50%;
        transform: translate(50%);
    `
};

export default styles;
