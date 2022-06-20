import TiltContainer from "@components/tilt-container";
import { px } from "@styles/helpers";
import media from "@styles/media";
import styled from "styled-components";

export const Para = styled.p``;

export const Image = styled.img`
  height: 100%;
  max-height: 50vh;
  object-fit: contain;
  grid-area: photo;
  margin: auto;
  width: 100%;
  ${media.min.lg} {
    width: auto;
  }
`;

export const Paras = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${px(24)};
  grid-area: info;
  text-align: center;

  ${media.min.lg} {
    text-align: right;
    font-size: ${px(30)};
    justify-content: center;
  }
`;

export const WrapperMe = styled.div`
  display: grid;
  grid-template-areas:
    "photo"
    "info";
  max-width: 70vw;
  gap: ${px(20)};

  ${media.min.lg} {
    gap: ${px(50)};
    grid-template-areas: "info info photo";
  }
`;

export const Info = styled(TiltContainer.ResetTilt)`
  display: flex;
  margin: auto;
  flex-direction: column;
  gap: ${px(20)};
  padding: ${px(20)} 0;
  align-items: center;

  h1 {
    text-align: center;
    font-size: ${px(26)};
    padding: ${px(10)} ${px(20)};
  }

  ${media.min.lg} {
    h1 {
      font-size: ${px(36)};
      padding: ${px(20)};
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
  z-index: 1;

  ${media.min.lg} {
    position: sticky;
    grid-template-areas: "info info photo";
  }
`;
