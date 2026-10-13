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

export const Route = createFileRoute('/a/')({
  component: HomePage
});

function HomePage() {
  return (
    <Container>
      <img src='/images/logo.png' alt='Rahul Kurup' className='logo' />
      <h1>Personal Applications Information Center</h1>
      <p>
        This is the public information center for personal web, mobile and
        desktop applications developed and maintained by Rahul Kurup. These
        applications are created strictly for personal use and include, but are
        not limited to, mail, notes, calendar, contacts, productivity tools and
        other utility applications.
      </p>

      <h2>Purpose of These Applications</h2>
      <p>
        The purpose of these applications is to provide private, secure and
        reliable tools for personal productivity, organization and communication.
        They are designed to help manage personal information and workflows in a
        controlled environment.
      </p>

      <h2>Public Availability</h2>
      <p>
        This information center is publicly accessible with no login required.
        Any public links to these resources, including the Privacy Policy and
        Terms and Conditions, are intended to remain openly accessible for
        review by users, partners and service providers.
      </p>

      <h2>Scope</h2>
      <p>
        The policies and information provided here apply to all applications
        developed for personal use by Rahul Kurup, whether currently available or
        created in the future. This ensures consistent privacy and usage
        standards across all projects.
      </p>

      <h2>Related Documents</h2>
      <ul>
        <li>
          <a href='/a/pp'>Privacy Policy</a>
        </li>
        <li>
          <a href='/a/tnc'>Terms and Conditions</a>
        </li>
      </ul>

      <h2>Contact</h2>
      <p>
        For any questions, concerns or requests relating to these applications,
        please contact Rahul Kurup through the appropriate channels associated
        with the specific application.
      </p>

      <p className='last-updated'>Last updated: October 13, 2026</p>
    </Container>
  );
}
