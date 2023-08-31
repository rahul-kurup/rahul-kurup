import Anchor from '@components/anchor';
import { ReactNode } from 'react';
import Wrapper, { Content, Dissolved, Duration, Text } from './style';

export type Props = {
  from: string;
  to?: string;
  company: string;
  website: string;
  dissolved?: boolean;
  designation: string;
  description: (string | ReactNode)[];
  techStack: string;
};

export default function Timeline(props: Props) {
  const descriptions = Array.isArray(props.description)
    ? props.description
    : [props.description];
  return (
    <Wrapper dissolved={props.dissolved}>
      <Duration>
        {props.from}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{props.to || 'Present'}
      </Duration>
      <Content>
        <span>
          <Anchor href={props.website}>
            <b>{props.company}</b>
          </Anchor>
          {props.dissolved && <Dissolved> (company dissolved)</Dissolved>}
        </span>
        <p>{props.designation}</p>
        {descriptions.map((desc, idx) => (
          <Text key={idx}>{desc}</Text>
        ))}
      </Content>
    </Wrapper>
  );
}
