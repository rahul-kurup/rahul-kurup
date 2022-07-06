import config from '@config';
import { cssVar, px } from '@styles/helpers';
import media from '@styles/media';
import styled from 'styled-components';

export const Links = styled.div`
  display: flex;
  gap: ${px(5)};
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default styled.footer`
  font-family: ${config.font.cursive.family};
  box-shadow: 0 0 ${px(32)} ${cssVar.grey.use};
  min-height: ${px(200)};
  background: ${cssVar.white.use};
  display: flex;
  place-content: center;
  place-items: center;
  padding: ${px(20)};
  font-size: ${px(18)};
  line-height: 2;
  flex-direction: column;
  position: sticky;
  bottom: 0;

  p {
    max-width: 70vw;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  ${media.min.lg} {
    margin-top: ${px(30)};
    font-size: ${px(22)};
  }
`;
