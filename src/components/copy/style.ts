import { px } from '@styles/helpers';
import styled, { keyframes } from 'styled-components';

const fadeAway = keyframes`
  0% {
    bottom: 40px;
    opacity: 1;
  }
  50% {
    bottom: 50px;
    opacity: 0.5;
  }
  100% {
    bottom: 60px;
    opacity: 0;
  }
`;

export const Copied = styled.span`
  position: absolute;
  opacity: 0;
  font-size: ${px(16)};
  bottom: 0;
  user-select: none;
`;

export const CopyContainer = styled.div`
  position: relative;
`;

export default styled.button`
  margin: 0 ${px(10)};
  font-size: ${px(20)};
  position: absolute;
  top: 50%;
  left: 0;
  cursor: pointer;
  background: transparent;
  padding: 0;
  border: 1px solid transparent;
  user-select: none;
  z-index: 1;
  transition: all 0.1s linear;
  transform: translateY(-50%);

  &:hover {
    transform: scale(1.05) translateY(-50%);
  }

  &:active {
    & + ${Copied} {
      animation: ${fadeAway} 1s linear;
    }
    transform: scale(0.9) translateY(-50%);
  }
`;
