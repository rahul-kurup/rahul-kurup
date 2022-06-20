import { px } from "@styles/helpers";
import media from "@styles/media";
import styled from "styled-components";

export const Duration = styled.div`
  font-size: ${px(16)};
  white-space: nowrap;

  ${media.min.lg} {
    width: auto;
    font-size: ${px(20)};
    height: fit-content;
    text-align: center;
    transform-origin: center;
    transform: rotate(-90deg);
    position: absolute;
  }
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${px(20)} 0;

  ${media.min.lg} {
    padding: ${px(20)} ${px(30)};
    margin-left: ${px(120)};
    border-left: ${px(1)} solid black;
  }

  p,
  b {
    padding: 0;
    margin: ${px(10)} 0;
  }
`;

export default styled.div`
  display: flex;
  align-items: center;
  font-size: ${px(20)};
  border-bottom: 1px solid;
  flex-direction: column;
  margin-top: ${px(20)};

  :last-of-type {
    border: none;
  }

  ${media.min.lg} {
    margin: 0;
    padding: ${px(20)};
    flex-direction: row;
  }
`;