import { cssVar, px } from '@styles/helpers';
import media from '@styles/media';
import styled, { keyframes } from 'styled-components';

const shiftColor = keyframes`
	0% {
    color: ${cssVar.grey.use};
    text-decoration-color: ${cssVar.logo.black.use};
	}
  50% {
    color: ${cssVar.black.use};
    text-decoration: underline;
    text-decoration-color: ${cssVar.logo.red.use};
	}
	100% {
    color: ${cssVar.grey.use};
    text-decoration-color: ${cssVar.logo.black.use};
	}
`;

const visitorHint = keyframes`
	0% {
    top: -${px(15)};
	}
	100% {
    top: -${px(30)};
	}
`;

export const Visitor = styled.span`
  background: ${cssVar.transparent.use};
  display: inline-block;
  border: ${px(1)} solid ${cssVar.transparent.use};
  outline: none;
  min-width: ${px(160)};
  cursor: text;
  position: relative;
  font-family: inherit;

  &:empty {
    &::after {
      content: 'stranger..?';
      min-width: ${px(160)};
      animation: ${shiftColor} 1.5s ease infinite;
    }
  }

  &:focus,
  &:active {
    color: ${cssVar.grey.use};
    border-color: ${cssVar.black.use};
    animation: none;
    &::before {
      content: 'Enter your name';
      white-space: nowrap;
      position: absolute;
      top: -${px(30)};
      left: -${px(1)};
      right: -${px(1)};
      background: ${cssVar.white.use};
      border: ${px(1)} solid ${cssVar.black.use};
      border-bottom: none;
      color: ${cssVar.black.use};
      font-size: ${px(14)};
      animation: ${visitorHint} 0.2s ease;
      padding: ${px(8)};
    }
  }

  &:not(:empty) {
    animation: none;
    color: ${cssVar.logo.red.use};
  }
`;

export const Salutation = styled.div`
  font-size: ${px(30)};
  font-weight: 300;
  text-align: center;
  max-width: 60vw;
  display: flex;
  flex-direction: column;
  gap: ${px(10)};
  line-height: 1.5;

  ${media.min.lg} {
    font-size: ${px(40)};
  }
`;

export default styled.section`
  min-height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  gap: ${px(40)};
  width: 100%;
  background: ${cssVar.white.use};
  z-index: 1;
`;
