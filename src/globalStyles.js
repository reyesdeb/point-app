import { createGlobalStyle } from 'styled-components';
import { colors } from 'theme';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    src: url('/static/fonts/source-sans-pro-v21-latin-regular.woff2') format('woff2')
  }

  body {
		font-family: 'Source Sans Pro';
    background: ${colors.lightGrey};
    padding-bottom: 74px;
	}
`;
