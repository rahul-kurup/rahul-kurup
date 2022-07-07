import Anchor from '@components/anchor';
import { px } from '@styles/helpers';
import media from '@styles/media';
import styled from 'styled-components';

export const Text = styled.span`
  display: none;
  font-size: ${px(16)};

  ${media.min.md} {
    display: inline;
  }
`;

export const Picture = styled.picture`
  display: flex;
`;

export const Img = styled.img`
  height: ${px(20)};
  width: ${px(20)};

  ${media.min.lg} {
    height: ${px(25)};
    width: ${px(25)};
  }
`;

export default styled(Anchor)`
  display: flex;
  align-items: center;
  gap: ${px(5)};
  ${Img} {
    filter: grayscale(1);
  }
  :hover {
    ${Img} {
      filter: none;
    }
  }
`;
