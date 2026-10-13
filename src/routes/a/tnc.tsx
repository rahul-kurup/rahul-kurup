import { createFileRoute } from '@tanstack/react-router';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.7;

  h1,
  h2,
  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  p,
  ul,
  ol {
    margin-bottom: 1rem;
  }

  ul,
  ol {
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  .last-updated {
    margin-top: 3rem;
    font-size: 0.9rem;
    color: #666;
  }
`;

export const Route = createFileRoute('/a/tnc')({
  component: TermsAndConditions
});

function TermsAndConditions() {
  return (
    <Container>
      <h1>Terms and Conditions</h1>
      <p>
        These Terms and Conditions govern the use of the personal applications
        developed and maintained by Rahul Kurup. These include, but are not limited
        to, mail, notes, calendar, contacts, productivity tools and other personal
        software projects, both current and future.
      </p>

      <h2>Scope</h2>
      <p>
        These terms apply to all personal applications created by Rahul Kurup for
        personal use. They serve as a common set of terms for all current and
        future projects unless a specific application provides its own separate
        terms.
      </p>

      <h2>Acceptance of Terms</h2>
      <p>
        By accessing or using any of these applications, you agree to be bound by
        these Terms and Conditions. If you do not agree with any part of these
        terms, you should not use the application.
      </p>

      <h2>Use of the Applications</h2>
      <p>
        These applications are provided for legitimate and lawful purposes only.
        Users agree to use them in compliance with all applicable laws and
        regulations.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, code, design, trademarks and other intellectual property
        associated with these applications remain the property of Rahul Kurup,
        unless otherwise stated. No part of these applications may be reproduced,
        distributed or modified without explicit permission.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        These applications are provided on an "as is" and "as available" basis.
        While every effort is made to ensure reliability, stability and accuracy,
        no guarantees are made that the applications will be error free,
        uninterrupted or secure at all times.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Rahul Kurup shall not be liable
        for any direct, indirect, incidental, consequential or special damages
        arising from the use or inability to use these applications.
      </p>

      <h2>Privacy</h2>
      <p>
        Use of these applications is also governed by the Privacy Policy
        referenced at <a href='/a/pp'>/a/pp</a>.
      </p>

      <h2>Modifications</h2>
      <p>
        These Terms and Conditions may be revised at any time as applications
        evolve. Updates will be reflected with a new revision date. Continued use
        of the applications after changes constitutes acceptance of the revised
        terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms shall be governed by and construed in accordance with
        applicable laws, without regard to conflict of law principles.
      </p>

      <p className='last-updated'>Last updated: October 2026</p>
    </Container>
  );
}
