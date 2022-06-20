import { px } from "@styles/helpers";
import styled from "styled-components";

const px10 = px(10);

export const Stuck = styled.div`
  position: sticky;
  top: 0;
  height: ${px10};
`;

export const Unstuck = styled.div`
  height: 0;
  overflow-y: auto;
  position: relative;
  z-index: 1;
`;

export const UnstuckPlacebo = styled.div`
  position: absolute;
  width: 100%;
  min-height: ${px10};
  background-color: inherit;
`;

export default styled.div`
  height: ${px10};
  display: contents;
  background-color: pink;
`;
