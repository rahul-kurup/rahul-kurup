import { px } from "@styles/helpers";
import media from "@styles/media";
import styled from "styled-components";

export default styled.main`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  padding: 0;

  ${media.min.lg} {
    gap: ${px(40)};
  }
`;
