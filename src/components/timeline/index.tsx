import { ReactNode } from "react";
import Wrapper, { Desc, Duration } from "./style";

export type Props = {
  from: string;
  to?: string;
  company: string;
  designation: string;
  description: string | ReactNode;
  techStack: string;
};

export default function Timeline(props: Props) {
  return (
    <Wrapper>
      <Duration>
        {props.from}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{props.to || "Present"}
      </Duration>
      <Desc>
        <b>{props.company}</b>
        <p>{props.designation}</p>
        <p>{props.description}</p>
        <p>Stack: {props.techStack}</p>
      </Desc>
    </Wrapper>
  );
}
