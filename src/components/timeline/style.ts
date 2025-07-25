import { cssVar, px } from '@styles/helpers';
import media from '@styles/media';
import styled from 'styled-components';

export const Dissolved = styled.span`
  color: red;
`;

export const Text = styled.p`
  font-size: ${px(16)};
`;

export const DurationWrapper = styled.div`
  font-size: ${px(16)};
  white-space: nowrap;
  display: flex;
  gap: ${px(5)};

  ${media.min.lg} {
    display: flex;
    gap: 0;
    flex-direction: column;
    width: auto;
    font-size: ${px(20)};
    height: fit-content;
    text-align: center;
    transform-origin: center;
    transform: rotate(-90deg);
    position: absolute;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${px(20)} 0;
  align-items: center;

  p,
  b {
    padding: 0;
    margin: ${px(10)} 0;
    text-align: center;
  }

  ${media.min.lg} {
    align-items: flex-start;
    padding: ${px(20)} ${px(30)};
    margin-left: ${px(100)};
    border-left: ${px(1)} solid ${cssVar.black.use};

    p,
    b {
      text-align: left !important;
    }
  }
`;

export default styled.div<{ dissolved?: boolean }>`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: ${px(20)};
  border-bottom: 1px solid ${cssVar.black.use};
  flex-direction: column;
  margin-top: ${px(20)};

  :last-of-type {
    border: none;
  }

  ${media.min.lg} {
    margin: 0;
    text-align: left;
    padding: ${px(20)};
    flex-direction: row;
  }
`;
