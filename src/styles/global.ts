import appConfig from '@config';
import Theme from '@models/ui/theme';
import { createGlobalStyle, css } from 'styled-components';
import fonts from './fonts';
import { cssVar, genThemedCssVars, px } from './helpers';
import media from './media';

const themedVars = genThemedCssVars(cssVar);
const themeColorsDark = themedVars.dark.join(';');
const themeColorsLight = themedVars.light.join(';');

const styles = css`
  :root {
    &:not([class^='theme-']),
    &.${Theme.auto} {
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

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: ${cssVar.black.use};
    background: ${cssVar.white.use};
    font-family: ${appConfig.font.primary.family};
    overflow-x: hidden;
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

const GlobalStyles = createGlobalStyle`
  ${fonts}
  ${styles}
` as unknown as () => JSX.Element;

export default GlobalStyles;
