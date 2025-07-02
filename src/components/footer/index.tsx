import SocialMedia, { socialMap } from '@components/icons/social-media';
import { ptSans, recursive } from '@styles/fonts';
import { Fragment } from 'react';
import Wrapper, { Links } from './style';

const socials = Object.keys(socialMap);

export default function Footer() {
  return (
    <Wrapper>
      <p className={recursive.className}>
        Well, that&apos;s all folks! <br />
      </p>

      <Links className={ptSans.className}>
        {socials.map(media => (
          <Fragment key={media}>
            <SocialMedia media={media as keyof typeof socialMap} />
            {socials.at(-1) !== media && <>{'•'}</>}
          </Fragment>
        ))}
      </Links>
    </Wrapper>
  );
}
