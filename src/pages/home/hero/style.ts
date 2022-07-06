import appConfig from '@config';
import { cssVar, px } from '@styles/helpers';
import media from '@styles/media';
import styled, { keyframes } from 'styled-components';

const shiftColor = keyframes`
	0% {
    color: ${cssVar.grey.use};
	}
  50% {
    color: ${cssVar.black.use};
    text-decoration: underline;
	}
	100% {
    color: ${cssVar.grey.use};
	}
`;

export const Visitor = styled.span`
  background: ${cssVar.transparent.use};
  display: inline-block;
  border: ${px(1)} solid ${cssVar.transparent.use};
  outline: none;
  min-width: ${px(40)};
  cursor: text;
  position: relative;

  :empty {
    ::after {
      content: 'stranger..?';
      min-width: ${px(160)};
      animation: ${shiftColor} 1.5s ease infinite;
    }
  }

  :focus,
  :active {
    color: ${cssVar.grey.use};
    border-color: ${cssVar.black.use};
    animation: none;
    ::before {
      content: 'Your name';
      position: absolute;
      top: -30px;
      left: 0;
      right: 0;
      color: ${cssVar.yellow.use};
      font-size: ${px(14)};
    }
  }

  :not(:empty) {
    animation: none;
    min-width: ${px(75)};
    color: ${cssVar.input.use};
  }
`;

export const Salutation = styled.div`
  font-size: ${px(30)};
  font-family: ${appConfig.font.cursive.family};
  font-weight: 100;
  text-align: center;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  gap: ${px(10)};
  line-height: 1.5;

  ${media.min.lg} {
    font-size: ${px(40)};
  }
`;

export const Logo = styled.img`
  height: ${px(200)};
  width: ${px(200)};
  filter: ${cssVar.logo.filter.use};

  ${media.min.lg} {
    height: ${px(300)};
    width: ${px(300)};
  }
`;

export default styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  gap: ${px(40)};
  width: 100%;
  background: ${cssVar.white.use};
  z-index: 1;
  box-shadow: 0 0 ${px(100)} ${px(200)} ${cssVar.white.use};
`;
