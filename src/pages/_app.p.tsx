import Footer from '@components/footer';
import ThemeToggle from '@components/theme-toggle';
import GlobalStyle from '@styles/global';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'src/context/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <main>
          <ThemeToggle />
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
