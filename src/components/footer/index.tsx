import Anchor from '@components/anchor';
import { Fragment } from 'react';
import Wrapper from './style';

const links = [
  ['LinkedIn', 'https://www.linkedin.com/in/rahulkrp'],
  ['Cal', 'https://cal.com/rahul-kurup/connect'],
  ['Calendly', 'https://calendly.com/rahul-kurup/connect'],
  ['Email', 'mailto:me@rahulkurup.com']
];

export default function Footer() {
  return (
    <Wrapper>
      <p>
        Well, that&apos;s all folks! <br />
        If you&apos;d like to talk or get in touch, connect with me over
      </p>
      <div>
        {links.map(([label, href], i) => (
          <Fragment key={label}>
            <Anchor href={href}>{label}</Anchor>
            {links.at(-1) !== links[i] && <>{' • '}</>}
          </Fragment>
        ))}
      </div>
    </Wrapper>
  );
}
