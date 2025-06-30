import media from '@styles/media';
import styled from 'styled-components';

export const ResetTilt = styled.div`
  transform: rotate(calc(var(--tilt) * -1));
  will-change: transform;
`;

export default styled.div<{ tiltDegree?: number }>`
  --tilt: 0deg;
  transform: rotate(var(--tilt));
  will-change: transform;
  ${media.min.lg} {
    --tilt: ${p => p.tiltDegree || 3}deg;
    grid-template-areas: 'info info photo';
  }
`;
