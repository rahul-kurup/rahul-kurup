import config from '@config';
import { colors, px } from '@styles/helpers';
import media from '@styles/media';
import styled from 'styled-components';

export default styled.footer`
  font-family: ${config.font.cursive.family};
  box-shadow: 0 0 ${px(32)} ${colors.grey.use};
  min-height: ${px(200)};
  background: ${colors.white.use};
  display: flex;
  place-content: center;
  place-items: center;
  padding: ${px(20)};
  font-size: ${px(18)};
  line-height: 2;
  display: flex;
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
