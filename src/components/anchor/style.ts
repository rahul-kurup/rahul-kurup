import { cssVar } from '@styles/helpers';
import styled from 'styled-components';

export default styled.a`
  white-space: nowrap;
  text-decoration: none;
  width: fit-content;
  color: ${cssVar.link.use};

  :hover {
    text-decoration: underline;
  }
`;
