// @ts-ignore
import * as normalize from "normalize.css/normalize.css";
import { createGlobalStyle, css } from "styled-components";

const styles = css`
  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: #222;
    font-family: "PT Sans", sans-serif;
    overflow-x: hidden;
  }
  * {
    box-sizing: border-box;
  }
  h1,
  h1,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 20px 0;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${styles}
` as unknown as () => JSX.Element;

export default GlobalStyles;
