import { px } from "@styles/helpers";
import media from "@styles/media";
import styled from "styled-components";

export default styled.footer`
  box-shadow: 0 0 ${px(32)} grey;
  min-height: ${px(200)};
  background: white;
  display: flex;
  place-content: center;
  place-items: center;
  padding: ${px(20)};
  font-size: ${px(20)};
  font-family: "Pacifico", cursive;
  line-height: 2;
  display: flex;
  flex-direction: column;
  position: sticky;
  bottom: 0;

  p {
    max-width: 70vw;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  ${media.min.lg} {
    margin-top: ${px(30)};
    font-size: ${px(26)};
  }
`;
