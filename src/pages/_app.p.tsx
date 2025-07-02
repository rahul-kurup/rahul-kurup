import Footer from '@components/footer';
import ThemeToggle from '@components/theme-toggle';
import Theme from '@models/ui/theme';
import { ptSans } from '@styles/fonts';
import GlobalStyle from '@styles/global';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'src/context/theme';

function MyApp({
  Component,
  pageProps: { theme, ...props }
}: AppProps<{ theme: Theme }>) {
  return (
    <>
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
