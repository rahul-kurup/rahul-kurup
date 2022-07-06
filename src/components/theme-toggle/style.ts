import { cssVar, px } from '@styles/helpers';
import styled, { css, keyframes } from 'styled-components';

const reveal = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const ThemeName = styled.span`
  display: none;
`;

export const ThemeIcon = styled.span`
  --size: ${px(20)};
  height: var(--size);
  width: var(--size);
  border-radius: 50%;
  border: ${px(1)} solid ${cssVar.black.use};
  display: flex;
  place-items: center;
  place-content: center;
`;

export const ThemeOption = styled.li`
  display: none;
  cursor: pointer;
  user-select: none;
  animation: ${reveal} 0.5s;
  gap: 5px;
  padding: ${px(2)} ${px(5)};
  border-radius: 5px;

  &.selected {
    display: flex;
  }
`;

export default styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${px(5)};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  margin: 0;
  padding: ${px(5)};
  list-style: none;
  align-items: end;

  :not(:hover) {
    ${ThemeOption}.selected {
      background: none;
    }
  }

  :hover {
    ${ThemeName} {
      display: inline;
    }
    ${ThemeOption} {
      display: flex;
      background: ${cssVar.white.use};
      color: ${cssVar.black.use};

      &.selected {
        color: ${cssVar.white.use};
        background: ${cssVar.black.use};
      }
    }
  }
`;
