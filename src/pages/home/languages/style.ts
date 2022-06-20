import TiltContainer from "@components/tilt-container";
import { px } from "@styles/helpers";
import media from "@styles/media";
import styled from "styled-components";

export const Skills = styled.table`
  max-width: 70vw;
  border-collapse: collapse;
  width: 100%;
  font-size: ${px(16)};
  margin-bottom: ${px(50)};

  thead {
    tr {
      background-color: #ddd;
    }
  }

  tr {
    :nth-child(even) {
      background-color: #ededed;
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

export const Info = styled(TiltContainer.ResetTilt)`
  display: flex;
  margin: auto;
  flex-direction: column;
  margin: ${px(20)} 0;
  align-items: center;
  margin: auto;

  h4 {
    text-align: center;
    font-size: ${px(26)};
  }

  h4,
  > p {
    margin: ${px(10)} ${px(20)};
    text-align: center;
  }

  ${media.min.lg} {
    gap: ${px(20)};

    h4 {
      font-size: ${px(36)};
    }

    h4,
    > p {
      margin: ${px(10)};
    }

    font-size: ${px(35)};
    padding: ${px(60)} ${px(20)};
  }
`;

export default styled(TiltContainer)`
  min-height: 100vh;
  box-shadow: 0 0 ${px(16)} grey;
  width: 100%;
  display: flex;
  top: 0;
  background: white;

  ${media.min.lg} {
    position: sticky;
    grid-template-areas: "info info photo";
  }
`;
