import styled from 'styled-components';
import { colors, font } from 'theme';

const styles = {
    Container: styled.div`
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
    `
};

export default styles;
