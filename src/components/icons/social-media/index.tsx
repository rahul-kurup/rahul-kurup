import { useTheme } from '@context/theme';
import Theme from '@models/ui/theme';
import { ComponentPropsWithoutRef } from 'react';
import Wrapper, { Img, Picture, Text } from './style';

export const socialMap = {
  resume: {
    name: 'Resume',
    icon: 'cv.png',
    href: '/pdf/resume.pdf'
  },
  linkedin: {
    name: 'LinkedIn',
    icon: 'linkedin.png',
    href: 'https://www.linkedin.com/in/rahulkrp'
  },
  stackoverflow: {
    name: 'StackOverflow',
    icon: 'stackoverflow.png',
    href: 'https://stackoverflow.com/users/6611487/boop-the-snoot?tab=profile'
  },
  github: {
    name: 'GitHub',
    icon: {
      dark: 'github.png',
      light: 'github-light.png'
    },
    href: 'https://github.com/rahul-kurup'
  },
  cal: {
    name: 'Cal',
    icon: 'cal.png',
    href: 'https://cal.com/rahul-kurup/connect'
  },
  calendly: {
    name: 'Calendly',
    icon: 'calendly.png',
    href: 'https://calendly.com/rahul-kurup/connect'
  }
};

export default function SocialMedia({
  media,
  ...props
}: {
  media: keyof typeof socialMap;
} & ComponentPropsWithoutRef<'a'>) {
  const social = socialMap[media];

  const { current: theme } = useTheme();

  const icon = (_theme: Theme) => {
    const img =
      typeof social.icon === 'string'
        ? social.icon
        : _theme === Theme.dark
          ? social.icon.light
          : _theme === Theme.light
            ? social.icon.dark
            : social.icon.dark;
    return `/images/${img}`;
  };

  return (
    <Wrapper
      href={social.href}
      aria-label={`Connect over ${social.name}`}
      {...props}
    >
      {theme === Theme.auto && typeof social.icon !== 'string' ? (
        <>
          <Picture>
            <source
              srcSet={icon(Theme.dark)}
              media='(prefers-color-scheme: dark)'
            />
            <Img srcSet={icon(Theme.light)} />
          </Picture>
        </>
      ) : (
        <>
          <Img src={icon(theme)} alt='' />
        </>
      )}
      <Text>{social.name}</Text>
    </Wrapper>
  );
}
