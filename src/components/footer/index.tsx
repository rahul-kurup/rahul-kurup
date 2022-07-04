import Anchor from '@components/anchor';
import Wrapper from './style';

export default function Footer() {
  return (
    <Wrapper>
      <p>
        Well, you&apos;ve reached the end! <br />
        If you&apos;d like to talk or get in touch, connect with me over:
      </p>
      <div>
        <Anchor href='https://www.linkedin.com/in/rahulkrp'>LinkedIn</Anchor>
        {' • '}
        <Anchor href='mailto:me@rahulkurup.com'>Email</Anchor>
      </div>
    </Wrapper>
  );
}
