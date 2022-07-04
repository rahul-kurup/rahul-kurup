import { colors, px } from '@styles/helpers';
import media from '@styles/media';
import styled from 'styled-components';
import { StyledTiltContainer, StyledTiltContainerReset } from '../style';

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

export const Info = styled(StyledTiltContainerReset)``;

export default styled(StyledTiltContainer)``;
