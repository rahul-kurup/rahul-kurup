import { colors, px } from "@styles/helpers";
import media from "@styles/media";
import styled from "styled-components";

export default styled.main`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  padding: 0;
  background: ${colors.white.use};
  min-height: 100vh;

  ${media.min.lg} {
    gap: ${px(40)};
  }
`;
