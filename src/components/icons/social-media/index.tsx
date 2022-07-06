import { ComponentPropsWithoutRef } from 'react';
import Wrapper, { Img, Text } from './style';

export const socialMap = {
  linkedin: {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rahulkrp'
  },
  stackoverflow: {
    name: 'StackOverflow',
    href: 'https://stackoverflow.com/users/6611487/boop-the-snoot?tab=profile'
  },
  github: {
    name: 'GitHub',
    href: 'https://github.com/rahul-kurup'
  },
  cal: { name: 'Cal', href: 'https://cal.com/rahul-kurup/connect' },
  calendly: {
    name: 'Calendly',
    href: 'https://calendly.com/rahul-kurup/connect'
  },
  email: { name: 'Email', href: 'mailto:me@rahulkurup.com' }
};

export default function SocialMedia({
  media,
  ...props
}: {
  media: 'linkedin' | 'stackoverflow' | 'github' | 'cal' | 'calendly' | 'email';
} & ComponentPropsWithoutRef<'a'>) {
  const social = socialMap[media];
  return (
    <Wrapper href={social.href} {...props}>
      <Img src={`/images/${media}.png`} alt={social.name} />
      <Text>{social.name}</Text>
    </Wrapper>
  );
}
