import styled from 'styled-components';

const styles = {
    Image: styled.img`
        width: 100%;
        max-width: ${({ width }) => (width ? `${width}px` : '100%')};
        max-height: ${({ height }) => (height ? `${height}px` : 'auto')};
    `
};

export default styles;
