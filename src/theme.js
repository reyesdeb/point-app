import { css } from 'styled-components';

const theme = {
    colors: {
        white: '#ffffff',
        lightGrey: '#f9f9f9',
        grey: '#a3a3a3',
        mediumGrey: '#ededed',
        darkGrey: '#616161',
        commonGrey: '#d9d9d9',
        green: '#22dafb',
        darkGreen: '#0ad4fa'
    },
    font: {
        xxsmall: '14px',
        xsmall: '16px',
        small: '18px',
        medium: '24px',
        large: '36px',
        xlarge: '48px',
        xxlarge: '64px'
    },
    fontWeight: {
        bold: 'bold'
    },
    mixins: {
        centerPage: css`
            margin: 0 auto;
            max-width: 1440px;
        `
    }
};

export const { colors, font, fontWeight, mixins } = theme;
