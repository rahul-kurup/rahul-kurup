import { cssVar, px } from '@styles/helpers';
import media from '@styles/media';
import styled from 'styled-components';
import { StyledTiltContainer, StyledTiltContainerReset } from '../style';

export const VisitorName = styled.b`
  color: ${cssVar.logo.red.use};
`;

export const Para = styled.p`
  ${media.min.lg} {
    text-align: right;
  }
`;

export const Image = styled.img`
  height: 100%;
  max-height: 50vh;
  object-fit: contain;
  grid-area: photo;
  margin: auto;
  width: 100%;
  ${media.min.lg} {
    width: auto;
  }
`;

export const Paras = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${px(24)};
  grid-area: info;
  text-align: center;

  ${media.min.lg} {
    text-align: right;
    font-size: ${px(30)};
    justify-content: center;
  }
`;

export const WrapperMe = styled.div`
  display: grid;
  grid-template-areas:
    'photo'
    'info';
  max-width: 70vw;
  gap: ${px(20)};

  ${media.min.lg} {
    gap: ${px(50)};
    grid-template-areas: 'info info photo';
  }
`;

export const Info = styled(StyledTiltContainerReset)`
  gap: ${px(20)};

  h1 {
    display: block;
    text-align: center;
    margin: ${px(10)} ${px(20)};
  }

  p {
    font-size: ${px(20)};
    margin: ${px(20)};
  }

  ${media.min.lg} {
    font-size: ${px(35)};
    margin: auto;
    padding: ${px(20)};

    h1 {
      margin: ${px(20)};
    }

    p {
      font-size: ${px(26)};
    }
  }
`;

export default styled(StyledTiltContainer)`
  ${media.min.lg} {
    grid-template-areas: 'info info photo';
  }
`;
