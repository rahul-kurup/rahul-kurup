import { PT_Sans, Recursive } from 'next/font/google';

export const recursive = Recursive({
  subsets: ['latin', 'cyrillic-ext', 'vietnamese', 'latin-ext'],
  weight: '400',
  display: 'optional'
});

export const ptSans = PT_Sans({
  weight: '400',
  subsets: ['latin', 'latin-ext']
});
