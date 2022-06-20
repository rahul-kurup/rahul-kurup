import { px } from "@styles/helpers";
import media from "@styles/media";
import styled, { keyframes } from "styled-components";

const shiftColor = keyframes`
	0% {
    color: grey;
	}
  50% {
    color: black;
    text-decoration: underline;
	}
	100% {
    color: grey;
	}
`;

export const Visitor = styled.span`
  background: transparent;
  display: inline-block;
  border: ${px(1)} solid transparent;
  outline: none;
  min-width: ${px(40)};
  cursor: text;
  position: relative;

  :empty {
    ::after {
      content: "stranger...?";
      min-width: ${px(160)};
      animation: ${shiftColor} 1.5s ease infinite;
    }
  }

  :focus,
  :active {
    color: grey;
    border-color: black;
    animation: none;
    ::before {
      content: "Your name";
      position: absolute;
      top: -30px;
      left: 0;
      right: 0;
      color: grey;
      font-size: ${px(14)};
    }
  }

  :not(:empty) {
    color: teal;
    animation: none;
  }
`;

export const Heading = styled.div`
  font-size: ${px(30)};
  font-family: "Pacifico", cursive;
  font-weight: 100;
  text-align: center;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  gap: ${px(10)};
  line-height: 1.5;

  ${media.min.lg} {
    font-size: ${px(40)};
  }
`;

export const Image = styled.img`
  min-height: ${px(300)};
  min-width: ${px(300)};
`;

export default styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  gap: ${px(40)};
  width: 100%;
  background: white;
  z-index: 1;
  box-shadow: 0 0 ${px(100)} ${px(200)} white;
`;
