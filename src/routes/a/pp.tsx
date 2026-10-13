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

export const Route = createFileRoute('/a/pp')({
  component: PrivacyPolicy
});

function PrivacyPolicy() {
  return (
    <Container>
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy outlines how personal data is collected, used,
        stored and protected in relation to the personal applications developed
        and maintained by Rahul Kurup. These applications include, but are not
        limited to, mail, notes, calendar, contacts, productivity tools and other
        personal software projects, both current and future.
      </p>

      <h2>Scope</h2>
      <p>
        This policy applies to all personal applications created by Rahul Kurup
        for personal use. Where a specific application has additional privacy
        requirements, those will be documented separately. However, the
        principles set out here serve as the baseline for all such applications.
      </p>

      <h2>Data Collection</h2>
      <p>
        The applications are designed with privacy as a priority. Data collection
        is limited strictly to what is necessary to provide the intended
        functionality. Where possible, data remains on the user's device or in
        controlled environments with minimal collection.
      </p>

      <p>Information that may be processed includes:</p>
      <ul>
        <li>Account or authentication details, where applicable</li>
        <li>Content created or entered by the user for the intended purpose</li>
        <li>Technical information necessary for security and stability</li>
      </ul>

      <h2>Use of Data</h2>
      <p>Any data collected is used solely for:</p>
      <ul>
        <li>Providing the core functionality of the application</li>
        <li>Maintaining security, integrity and availability</li>
        <li>Improving stability and preventing abuse</li>
      </ul>

      <p>
        Data is not sold, rented, traded or shared with third parties for
        marketing or commercial purposes.
      </p>

      <h2>Data Storage and Security</h2>
      <p>
        Reasonable technical and organizational measures are taken to protect
        data against unauthorized access, alteration, disclosure or destruction.
        Data is stored only for as long as necessary to fulfill the intended
        purpose or as required by applicable law.
      </p>

      <h2>Third Party Services</h2>
      <p>
        Some applications may integrate with trusted third party services to
        provide specific functionality (such as authentication or infrastructure
        services). Any such integration is limited to what is required and
        subject to the privacy practices of those providers.
      </p>

      <h2>User Rights</h2>
      <p>
        Users have the right to access, correct or delete their data where
        applicable under relevant regulations. Requests can be directed to the
        contact channels associated with the specific application.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        This Privacy Policy may be updated from time to time as applications
        evolve. Any changes will be reflected with an updated revision date.
        Continued use of the applications after changes constitute acceptance of
        the updated policy.
      </p>

      <p className='last-updated'>Last updated: October 2026</p>
    </Container>
  );
}
