import TiltContainer from '@components/tilt-container';
import { colors, px } from '@styles/helpers';
import media from '@styles/media';
import styled from 'styled-components';

export const Desc = styled.button<{ isDesc: boolean }>`
  cursor: ${p => (p.isDesc ? 's-resize' : 'n-resize')};
  background: ${colors.transparent.use};
  border-color: ${colors.transparent.use};
  color: ${colors.black.use};
  padding: 0;
  margin: 0;
  text-decoration: underline;
`;

export const Work = styled.div`
  max-width: 70vw;
  display: flex;
  flex-direction: column;

  ${media.min.lg} {
    max-height: 60vh;
    position: relative;
    overflow: auto;
    box-shadow: inset 0 0 ${px(10)} 0 ${colors.grey.use};
    border-radius: 5px;
  }
`;

export const Info = styled(TiltContainer.ResetTilt)`
  display: flex;
  margin: auto;
  flex-direction: column;
  margin: ${px(20)} 0;
  padding: ${px(20)} 0;
  align-items: center;
  margin: auto;

  h2,
  > p {
    margin: ${px(10)} ${px(20)};
  }

  p {
    text-align: center;
    font-size: ${px(20)};
  }

  ${media.min.lg} {
    gap: ${px(20)};
    font-size: ${px(35)};

    h2,
    > p {
      margin: ${px(10)};
    }

    padding: ${px(60)} ${px(20)};
  }
`;

export default styled(TiltContainer)`
  min-height: 100vh;
  box-shadow: 0 0 ${px(16)} ${colors.grey.use};
  width: 100%;
  display: flex;
  top: 0;
  background: ${colors.white.use};
  z-index: 1;

  ${media.min.lg} {
    position: sticky;
    grid-template-areas: 'info info photo';
  }
`;
