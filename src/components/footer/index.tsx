import Anchor from '@components/anchor';
import { Fragment } from 'react';
import Wrapper, { Links } from './style';

const links = [
  ['LinkedIn', 'https://www.linkedin.com/in/rahulkrp'],
  ['StackOverflow', 'https://stackoverflow.com/users/6611487/boop-the-snoot?tab=profile'],
  ['GitHub', 'https://github.com/rahul-kurup'],
  ['Cal', 'https://cal.com/rahul-kurup/connect'],
  ['Calendly', 'https://calendly.com/rahul-kurup/connect'],
  ['Email', 'mailto:me@rahulkurup.com']
];

export default function Footer() {
  return (
    <Wrapper>
      <p>
        Well, that&apos;s all folks! <br />
      </p>
      <Links>
        {links.map(([label, href], i) => (
          <Fragment key={label}>
            <Anchor href={href}>{label}</Anchor>
            {links.at(-1) !== links[i] && <>{'•'}</>}
          </Fragment>
        ))}
      </Links>
    </Wrapper>
  );
}
