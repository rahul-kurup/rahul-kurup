import Anchor from '@components/anchor';
import { ReactNode } from 'react';
import Wrapper, { Desc, Dissolved, Duration } from './style';

export type Props = {
  from: string;
  to?: string;
  company: string;
  website: string;
  dissolved?: boolean;
  designation: string;
  description: string | ReactNode;
  techStack: string;
};

export default function Timeline(props: Props) {
  return (
    <Wrapper dissolved={props.dissolved}>
      <Duration>
        {props.from}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{props.to || 'Present'}
      </Duration>
      <Desc>
        <span>
          <Anchor href={props.website}>
            <b>{props.company}</b>
          </Anchor>
          {props.dissolved && <Dissolved> (company dissolved)</Dissolved>}
        </span>
        <p>{props.designation}</p>
        <p>{props.description}</p>
        <p>Stack: {props.techStack}</p>
      </Desc>
    </Wrapper>
  );
}
