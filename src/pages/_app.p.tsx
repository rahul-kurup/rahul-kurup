import Footer from '@components/footer';
import ThemeToggle from '@components/theme-toggle';
import GlobalStyle from '@styles/global';
import StorageKey from '@utils/storage/keys';
import type { AppContext, AppProps } from 'next/app';
import nookies from 'nookies';
import { ThemeProvider } from 'src/context/theme';

function MyApp({ Component, pageProps: { theme, ...props } }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider initialTheme={theme}>
        <main>
          <ThemeToggle />
          <Component {...props} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ ctx }: AppContext) => {
  const { [StorageKey.theme]: theme } = nookies.get(ctx);
  return { pageProps: { theme } };
};

export default MyApp;
