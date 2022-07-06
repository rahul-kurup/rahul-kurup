import { cssVar, px } from '@styles/helpers';
import media from '@styles/media';
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
  align-items: center;
  width: 100%;
  justify-content: flex-end;

  &.selected {
    display: flex;
    background: none;
  }
`;

export default styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${px(5)};
  z-index: 10;
  margin: ${px(5)};
  padding: ${px(10)};
  list-style: none;
  align-items: end;
  opacity: 0.6;
  border-radius: 5px;
  position: fixed;
  right: 0;
  bottom: 0;

  ${media.min.md} {
    bottom: unset;
    top: 0;
  }

  :hover {
    opacity: 1;
    background: ${cssVar.white.use};
    box-shadow: 0 0 10px ${cssVar.grey.use};

    ${ThemeOption} {
      display: flex;
      color: ${cssVar.black.use};

      ${ThemeName} {
        display: inline;
      }

      &.selected {
        color: ${cssVar.white.use};
        background: ${cssVar.black.use};

        ${ThemeIcon} {
          border: ${px(1)} solid ${cssVar.white.use};
        }
      }
    }
  }
`;
