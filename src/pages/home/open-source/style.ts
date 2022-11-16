import media from '@styles/media';
import styled from 'styled-components';
import { StyledTiltContainer, StyledTiltContainerReset } from '../style';

export const Downloads = styled.span`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  align-items: center;
  ${media.max.lg} {
    justify-content: center;
  }
`;

export const Info = styled(StyledTiltContainerReset)``;

export default styled(StyledTiltContainer)``;
