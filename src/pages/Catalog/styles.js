import styled from 'styled-components';
import { mixins, colors } from 'theme';

const styles = {
    CenterContainer: styled.div`
        ${mixins.centerContainer}
    `,
    StyckyWrapper: styled.div`
        position: sticky;
        top: 80px;
        z-index: 2;
        background: ${colors.lightGrey};
    `,
    ProductsGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, 276px);
        grid-gap: 24px;
        justify-content: center;
        margin-top: 30px;
    `
};

export default styles;
