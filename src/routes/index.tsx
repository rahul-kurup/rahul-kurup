import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { sendVisitor } from '../server-functions/visitor';
import Hero from '@components/home/hero';
import Languages from '@components/home/languages';
import Me from '@components/home/me';
import OpenSource from '@components/home/open-source';
import Wrapper from '@components/home/style';
import WorkExperience from '@components/home/work-experience';
import config from '@config';

async function handleVisitor(visitor: string) {
  let token = '';
  if (config.recaptcha.enabled) {
    token = await (window as any)['grecaptcha']?.execute(
      config.recaptcha.siteKey,
      {
        action: 'submit'
      }
    );
  }
  try {
    await sendVisitor({ data: { name: visitor, token } });
  } catch (error) {
    console.error('Visitor tracking failed', error);
  }
}

export const Route = createFileRoute('/')({
  component: Home
});

function Home() {
  const [visitor, setVisitor] = useState('');

  useEffect(() => {
    if (visitor?.trim()) {
      handleVisitor(visitor).then(); // fire and forget
      document.getElementById('me')!.scrollIntoView();
    }
  }, [visitor]);

  return (
    <Wrapper>
      <Hero setVisitor={setVisitor} />
      <Me visitor={visitor} />
      <WorkExperience />
      <OpenSource />
      <Languages />
    </Wrapper>
  );
}