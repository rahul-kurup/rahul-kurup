import Footer from '@components/footer';
import ThemeToggle from '@components/theme-toggle';
import config from '@config';
import Theme from '@models/ui/theme';
import { ptSans } from '@styles/fonts';
import GlobalStyle from '@styles/global';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from 'src/context/theme';

function MyApp({
  Component,
  pageProps: { theme, ...props }
}: AppProps<{ theme: Theme }>) {
  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${config.recaptcha.siteKey}`}
        strategy='afterInteractive'
      />

      <GlobalStyle />
      <ThemeProvider initialTheme={theme}>
        <main className={ptSans.className}>
          <ThemeToggle />

          <Component {...props} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
