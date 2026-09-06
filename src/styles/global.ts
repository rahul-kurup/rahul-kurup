import { createElement } from 'react';
import { Global, css } from '@emotion/react';
import { cssVar, genThemedCssVars, px } from './helpers';
import media from './media';

const themedVars = genThemedCssVars(cssVar);
const themeColorsDark = themedVars.dark.join(';');
const themeColorsLight = themedVars.light.join(';');

const styles = css`
  :root {
    & {
      ${themeColorsLight};

      ${media.prefers.dark} {
        ${themeColorsDark};
      }
    }
    &.theme-light {
      ${themeColorsLight};
    }
    &.theme-dark {
      ${themeColorsDark};
    }
  }

  .font-recursive {
    font-family: 'Recursive Variable', ui-sans-serif, system-ui, sans-serif;
    font-variation-settings: 'MONO' 0 'CASL' 0 'wght' 400 'CRSV' 0 'slnt' 0 'XOPX' 0;
  }

  .font-pt-sans {
    font-family: 'PT Sans', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 400;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: ${cssVar.black.use};
    background: ${cssVar.white.use};
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    text-align: center;
    font-size: ${px(26)};

    ${media.min.lg} {
      font-size: ${px(36)};
    }
  }
`;

const GlobalStyles = () => createElement(Global, { styles });

export default GlobalStyles;
