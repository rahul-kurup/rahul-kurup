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

export const Route = createFileRoute('/a/')({
  component: HomePage
});

function HomePage() {
  return (
    <Container>
      <h1>Information Center for Personal Applications</h1>
      <p>
        This page provides general information regarding the personal applications
        developed and maintained by Rahul Kurup. These include, but are not limited
        to, mail, notes, calendar, contacts, productivity tools and other personal
        software projects.
      </p>

      <h2>Purpose</h2>
      <p>
        The applications covered by this information center are created strictly
        for personal use. They are designed to operate in a secure, private and
        reliable manner. This center serves as a common reference point for all
        current and future personal projects.
      </p>

      <h2>Scope</h2>
      <p>
        The policies and information provided here apply to all applications
        developed for personal use by Rahul Kurup, whether available publicly or
        restricted to personal use. This includes any new applications or
        services that may be created in the future.
      </p>

      <h2>Contact</h2>
      <p>
        For any questions or concerns relating to these applications, please
        contact Rahul Kurup through the appropriate channels associated with each
        specific application.
      </p>

      <p className='last-updated'>Last updated: October 2026</p>
    </Container>
  );
}
