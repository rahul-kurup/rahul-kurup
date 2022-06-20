import TiltContainer from "@components/tilt-container";
import { px } from "@styles/helpers";
import media from "@styles/media";
import styled from "styled-components";

export const Contributions = styled.div`
  max-width: 70vw;
  display: flex;
  flex-direction: column;
`;

export const Info = styled(TiltContainer.ResetTilt)`
  display: flex;
  margin: auto;
  flex-direction: column;
  margin: ${px(20)} 0;
  align-items: center;
  margin: auto;

  h3 {
    text-align: center;
    font-size: ${px(26)};
  }

  h3,
  > p {
    margin: ${px(10)} ${px(20)};
    text-align: center;
  }

  ${media.min.lg} {
    gap: ${px(20)};

    h3 {
      font-size: ${px(36)};
    }

    h3,
    > p {
      margin: ${px(10)};
    }

    font-size: ${px(35)};
    padding: ${px(60)} ${px(20)};
  }
`;

export default styled(TiltContainer)`
  min-height: 100vh;
  box-shadow: 0 0 ${px(16)} grey;
  width: 100%;
  display: flex;
  top: 0;
  background: white;

  ${media.min.lg} {
    position: sticky;
    grid-template-areas: "info info photo";
  }
`;
