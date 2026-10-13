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

export const Route = createFileRoute('/a/pp')({
  component: PrivacyPolicy
});

function PrivacyPolicy() {
  return (
    <Container>
      <img src='/images/logo.png' alt='Rahul Kurup' className='logo' />
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy explains in detail what data is collected, how it is
        used, stored, shared and protected for all personal applications
        developed and maintained by Rahul Kurup. These applications include, but
        are not limited to, mail, notes, calendar, contacts, productivity tools
        and other personal software projects, both current and future.
      </p>

      <h2>Scope of This Policy</h2>
      <p>
        This policy applies to all personal applications created by Rahul Kurup
        for personal use. It covers data collected directly through the
        applications, data generated through their use and any associated
        services that form part of their functionality.
      </p>

      <h2>Data Collection</h2>
      <p>
        These applications are designed to minimize data collection. The exact
        data collected depends on the specific functionality, but in general:
      </p>
      <ul>
        <li>
          Account information: Only where authentication is required for the
          intended personal use, minimal identifiers may be collected.
        </li>
        <li>
          User content: Data, files, notes, messages, calendar entries,
          contacts or other content that you create, upload or store within the
          application.
        </li>
        <li>
          Device and technical information: Basic information such as device
          type, operating system, IP address, browser type and technical logs
          may be collected solely for security, diagnostics and stability.
        </li>
        <li>
          Usage information: Anonymous or minimal usage data may be collected to
          detect errors and improve reliability.
        </li>
      </ul>

      <h2>How Data Is Used</h2>
      <p>All collected data is used strictly for the following purposes:</p>
      <ul>
        <li>To provide, operate and maintain the core functionality.</li>
        <li>To authenticate users and maintain secure access.</li>
        <li>To protect against unauthorized access, fraud or abuse.</li>
        <li>To maintain stability, troubleshoot issues and improve performance.</li>
        <li>To comply with applicable legal obligations.</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>
        Data is not sold, rented, leased, traded or shared with third parties
        for advertising, marketing or commercial purposes. Limited sharing may
        only occur when:
      </p>
      <ul>
        <li>Required by applicable law, regulation or valid legal process.</li>
        <li>Necessary to protect the security, rights or safety of users.</li>
        <li>
          With trusted service providers strictly to provide required
          infrastructure (such as hosting, storage or authentication), and only
          to the extent necessary with appropriate safeguards.
        </li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        Data is retained only for as long as necessary to fulfill the purposes
        for which it was collected, to maintain the application, or as required
        by applicable law. When data is no longer needed, reasonable steps are
        taken to securely delete or anonymize it.
      </p>

      <h2>Data Security</h2>
      <p>
        Appropriate technical and organizational security measures are
        implemented to protect data against unauthorized access, disclosure,
        alteration or destruction. These measures include access controls,
        encryption where appropriate and secure storage practices.
      </p>

      <h2>User Rights</h2>
      <p>
        Depending on applicable jurisdiction, users may have rights to access,
        correct, delete, restrict or object to processing of their data. To
        exercise these rights, users should contact Rahul Kurup through the
        appropriate channels associated with the specific application.
      </p>

      <h2>Third Party Services</h2>
      <p>
        Some applications may rely on trusted third party infrastructure
        providers to operate effectively. Such providers are selected with care
        and are only used to the extent required to provide core functionality,
        subject to their applicable terms and privacy protections.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        These applications are intended for general use and are not directed to
        children under the age of 13. Data is not knowingly collected from
        children under 13.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        This Privacy Policy may be updated from time to time to reflect changes
        in functionality, practices or legal requirements. The "Last updated"
        date at the bottom of this page will be revised accordingly. Continued
        use of the applications after such changes constitutes acceptance of the
        updated policy.
      </p>

      <p className='last-updated'>Last updated: October 13, 2026</p>
    </Container>
  );
}
