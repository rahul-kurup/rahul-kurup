import TiltContainer from '@components/tilt-container';
import { cssVar, px } from '@styles/helpers';
import media from '@styles/media';
import styled, { css } from 'styled-components';

export const StyledTiltContainerReset = styled(TiltContainer.ResetTilt)`
  display: flex;
  flex-direction: column;
  padding: ${px(20)} 0;
  align-items: center;
  margin: auto;

  h2,
  h3,
  h4 {
    > p {
      margin: ${px(10)} ${px(20)};
    }
  }

  p {
    text-align: center;
    font-size: ${px(20)};
  }

  ${media.min.lg} {
    gap: ${px(20)};
    font-size: ${px(35)};
    padding: ${px(60)} ${px(20)};

    h2,
    h3,
    h4 {
      > p {
        margin: ${px(10)};
      }
    }
  }
`;

export const StyledTiltContainer = styled(TiltContainer)`
  min-height: 100vh;
  box-shadow: 0 0 ${px(16)} ${cssVar.grey.use};
  width: 100%;
  display: flex;
  top: 0;
  background: ${cssVar.white.use};
  z-index: 1;

  ${media.min.lg} {
    position: sticky;
  }
`;

export default styled.main`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  padding: 0;
  background: ${cssVar.white.use};
  min-height: 100vh;

  ${media.min.lg} {
    gap: ${px(40)};
  }
`;
