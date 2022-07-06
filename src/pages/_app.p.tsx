import ThemeToggle from '@components/theme-toggle';
import GlobalStyle from '@styles/global';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeToggle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
