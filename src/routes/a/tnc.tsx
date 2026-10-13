import { createFileRoute } from '@tanstack/react-router';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.7;
  .logo {
    max-width: 120px;
    margin-bottom: 1.5rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

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
      <img src='/images/logo.png' alt='Rahul Kurup' className='logo' />
      <h1>Terms and Conditions</h1>
      <p>
        These Terms and Conditions govern the use of all personal applications
        developed and maintained by Rahul Kurup. These include, but are not
        limited to, mail, notes, calendar, contacts, productivity tools and other
        personal software projects, both current and future.
      </p>

      <h2>Scope and Applicability</h2>
      <p>
        These terms apply to all personal applications created by Rahul Kurup for
        personal use. They serve as a common set of terms unless a specific
        application provides its own separate terms and conditions.
      </p>

      <h2>Acceptance of Terms</h2>
      <p>
        By accessing or using any of these applications, you acknowledge that you
        have read, understood and agree to be bound by these Terms and
        Conditions and the associated Privacy Policy at{' '}
        <a href='/a/pp'>/a/pp</a>.
      </p>

      <h2>Purpose and Access</h2>
      <p>
        These applications are provided as tools for personal productivity and
        organization. Access to these applications is provided at the discretion
        of Rahul Kurup and may require authentication where applicable.
      </p>

      <h2>User Responsibilities</h2>
      <p>By using these applications, you agree to:</p>
      <ul>
        <li>Use them only for lawful purposes and in compliance with applicable laws.</li>
        <li>Not attempt to gain unauthorized access to any part of the applications.</li>
        <li>Not use the applications to distribute harmful, illegal or malicious content.</li>
        <li>Take reasonable steps to protect your account credentials.</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        All content, code, design, logos, trademarks and other intellectual
        property associated with these applications remain the exclusive property
        of Rahul Kurup, unless otherwise explicitly stated. No part of these
        applications may be copied, reproduced, modified, distributed or used for
        commercial purposes without explicit permission.
      </p>

      <h2>Privacy</h2>
      <p>
        The collection and use of personal information is governed by the Privacy
        Policy available at <a href='/a/pp'>/a/pp</a>. By using these
        applications, you consent to the practices described in that policy.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        These applications are provided on an "as is" and "as available" basis,
        without warranties of any kind, either express or implied. Rahul Kurup
        makes no representations or warranties regarding the accuracy,
        reliability, availability, security or fitness for a particular purpose
        of these applications.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Rahul Kurup shall not
        be liable for any direct, indirect, incidental, special, consequential or
        punitive damages, including but not limited to loss of data, loss of
        profits or interruption of business, arising out of or related to the
        use or inability to use these applications.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Rahul Kurup from any claims,
        losses, damages or expenses arising from your use of these applications
        in violation of these terms or applicable law.
      </p>

      <h2>Availability and Changes</h2>
      <p>
        Rahul Kurup reserves the right to modify, suspend or discontinue any of
        these applications, in whole or in part, at any time without prior
        notice. Features and functionality may change as the applications evolve.
      </p>

      <h2>Modifications to Terms</h2>
      <p>
        These Terms and Conditions may be updated from time to time. The "Last
        updated" date will be revised accordingly. Continued use of the
        applications after such changes constitutes acceptance of the revised
        terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms shall be governed by and construed in accordance with the
        laws applicable in the relevant jurisdiction, without regard to conflict
        of law principles.
      </p>

      <p className='last-updated'>Last updated: October 13, 2026</p>
    </Container>
  );
}
