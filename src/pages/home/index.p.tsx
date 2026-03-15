import config from '@config';
import StorageKey from '@utils/storage/keys';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import nookies from 'nookies';
import { useEffect, useState } from 'react';
import Hero from './hero';
import Languages from './languages';
import Me from './me';
import OpenSource from './open-source';
import Wrapper from './style';
import WorkExperience from './work-experience';

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
  await fetch(`/api/visitor?name=${visitor}`, {
    headers: {
      [config.recaptcha.tokenHeader]: token
    }
  }).then();
}

const Home: NextPage = () => {
  const [visitor, setVisitor] = useState('');

  useEffect(() => {
    if (visitor?.trim()) {
      handleVisitor(visitor).then(); // fire and forget
      document.getElementById('me')!.scrollIntoView();
    }
  }, [visitor]);

  return (
    <>
      <Head>
        <title>rahul kurup</title>
        <meta name='description' content="Rahul Kurup's online resume" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Wrapper>
        <Hero setVisitor={setVisitor} />
        <Me visitor={visitor} />
        <WorkExperience />
        <OpenSource />
        <Languages />
      </Wrapper>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { [StorageKey.theme]: theme = null } = nookies.get(ctx) || {};
  return { props: { theme } };
};
