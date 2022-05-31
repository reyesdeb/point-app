import styled from 'styled-components';
import { colors, mixins, font, fontWeight } from 'theme';

const styles = {
    Background: styled.div`
        background: ${colors.green};
        height: 430px;
    `,
    CenterContainer: styled.div`
        ${mixins.centerPage}
        position: relative
    `,
    Text: styled.h1`
        font-size: ${font.xxlarge};
        font-weight: ${fontWeight.bold};
        color: ${colors.white};
        position: absolute;
        bottom: 48px;
        left: 132px;
    `
};

export default styles;
