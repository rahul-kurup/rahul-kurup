import { cssVar, px } from '@styles/helpers';
import media from '@styles/media';
import styled from 'styled-components';

const strokeWidth = px(20);

const Line = styled.line`
  stroke-width: ${strokeWidth};
`;

export const LeftLimbs = styled(Line)`
  stroke: ${cssVar.logo.black.use};
`;

export const RightLimbs = styled(Line)`
  stroke: ${cssVar.logo.red.use};
`;

export const Neck = styled.polygon`
  fill: ${cssVar.logo.red.use};
`;

export const Head = styled.ellipse`
  stroke-width: ${strokeWidth};
  stroke: ${cssVar.logo.red.use};
  fill: none;
`;

export const HeadArc = styled.path`
  fill: ${cssVar.logo.black.use};
`;

export default styled.svg`
  height: ${px(200)};
  width: ${px(200)};

  ${media.min.lg} {
    height: ${px(300)};
    width: ${px(300)};
  }
`;
