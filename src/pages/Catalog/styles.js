import styled from 'styled-components';
import { colors } from 'theme';

const styles = {
    StickyWrapper: styled.div`
        display: flex;
        justify-content: center;
        position: sticky;
        top: 80px;
        z-index: 2;
        background: ${colors.lightGrey};
    `,
    MainContainer: styled.main`
        margin: 0 auto;
        max-width: 1176px;
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
