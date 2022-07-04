import appConfig from '@config';
// @ts-ignore
import * as normalize from 'normalize.css/normalize.css';
import { createGlobalStyle, css } from 'styled-components';
import { colors, px } from './helpers';
import media from './media';

const styles = css`
  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: ${colors.black.use};
    background: ${colors.white.use};
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
    padding: 20px 0;
    text-align: center;
    font-size: ${px(26)};

    ${media.min.lg} {
      font-size: ${px(36)};
    }
  }

  a {
    color: blue;
  }

  :root {
    ${colors.grey.def}: grey;
    ${colors.yellow.def}: grey;
    ${colors.black.def}: #222;
    ${colors.white.def}: white;
    ${colors.transparent.def}: #ffffff00;
    ${colors.table.head.rowBg.def}: #ddd;
    ${colors.table.row.even.def}: #ededed;

    ${media.preferDark} {
      ${colors.yellow.def}: yellow;
      ${colors.grey.def}: #6c6c6c;
      ${colors.black.def}: #dddddd;
      ${colors.white.def}: #222;
      ${colors.transparent.def}: #ffffff00;
      ${colors.table.head.rowBg.def}: #323232;
      ${colors.table.row.even.def}: #2a2a2a;
      a {
        color: #3391ff;
      }
    }
  }
`;

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${styles}
` as unknown as () => JSX.Element;

export default GlobalStyles;
