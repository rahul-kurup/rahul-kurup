import appConfig from '@config';
import { colors, px } from '@styles/helpers';
import media from '@styles/media';
import styled, { keyframes } from 'styled-components';

const shiftColor = keyframes`
	0% {
    color: ${colors.grey.use};
	}
  50% {
    color: ${colors.black.use};
    text-decoration: underline;
	}
	100% {
    color: ${colors.grey.use};
	}
`;

export const Visitor = styled.span`
  background: ${colors.transparent.use};
  display: inline-block;
  border: ${px(1)} solid ${colors.transparent.use};
  outline: none;
  min-width: ${px(40)};
  cursor: text;
  position: relative;

  :empty {
    ::after {
      content: 'stranger...?';
      min-width: ${px(160)};
      animation: ${shiftColor} 1.5s ease infinite;
    }
  }

  :focus,
  :active {
    color: ${colors.grey.use};
    border-color: ${colors.black.use};
    animation: none;
    ::before {
      content: 'Your name';
      position: absolute;
      top: -30px;
      left: 0;
      right: 0;
      color: ${colors.yellow.use};
      font-size: ${px(14)};
    }
  }

  :not(:empty) {
    color: teal;
    animation: none;
    min-width: ${px(75)};
    ${media.preferDark} {
      color: orange;
    }
  }
`;

export const Heading = styled.div`
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
  min-height: ${px(300)};
  min-width: ${px(300)};
  ${media.preferDark} {
    filter: invert(97%) sepia(100%) saturate(1%) hue-rotate(90deg)
      brightness(107%) contrast(101%);
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
  background: ${colors.white.use};
  z-index: 1;
  box-shadow: 0 0 ${px(100)} ${px(200)} ${colors.white.use};
`;
