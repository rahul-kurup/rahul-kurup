import { cssVar, px } from '@styles/helpers';
import media from '@styles/media';
import styled from 'styled-components';
import { StyledTiltContainer, StyledTiltContainerReset } from '../style';

export const Skills = styled.table`
  min-width: 60vw;
  border-collapse: collapse;
  width: 100%;
  font-size: ${px(16)};
  margin-bottom: ${px(50)};

  thead {
    position: sticky;
    top: 0;
    tr {
      background-color: ${cssVar.table.head.rowBg.use};
    }
  }

  tr {
    :nth-child(even) {
      background-color: ${cssVar.table.row.even.use};
    }

    td,
    th {
      padding: ${px(10)};
      text-align: center;
    }
  }
  ${media.min.lg} {
    margin-bottom: ${px(20)};
    font-size: ${px(22)};
  }
`;

export const Info = styled(StyledTiltContainerReset)``;

export default styled(StyledTiltContainer)``;
