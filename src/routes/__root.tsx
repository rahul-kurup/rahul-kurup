import Footer from '@components/footer';
import ThemeToggle from '@components/theme-toggle';
import { ThemeProvider } from '@context/theme';
import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import { ComponentProps } from 'react';
import { getServerTheme } from '../server-functions/theme';
import appConfig from '@config';
import GlobalStyle from '@styles/global';
import { getThemeFromCookie } from '@utils/theme';
import trackingScripts from '@utils/tracking';
import ptSansCss from '@fontsource/pt-sans/400.css?url';
import recursiveCss from '@fontsource-variable/recursive/index.css?url';

const keywords = [
  'rahulkrp',
  'rahulkurup',
  'rahul-kurup',
  'rahul kurup',
  'boop-the-snoot',
  'frontend developer',
  'freelance developer',
  'fullstack developer',
  'react',
  'react.js',
  'next',
  'next.js',
  'javascript',
  'typescript'
].join();

export const Route = createRootRoute({
  loader: async () => {
    if (typeof document !== 'undefined') {
      return { theme: getThemeFromCookie(document.cookie) };
    }
    return { theme: await getServerTheme() };
  },
  component: RootDocument
});

function RootDocument() {
  const { theme } = Route.useLoaderData();

  return (
    <html lang='en' dir='ltr' className={theme}>
      <head>
        <HeadContent />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='application-name' content='rahul kurup' />
        <title>rahul kurup</title>
        <meta name='description' content="Rahul Kurup's online resume" />
        <meta name='keywords' content={keywords} />
        <meta name='format-detection' content='telephone=yes' />
        <meta name='mobile-web-app-capable' content='yes' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='stylesheet' href={recursiveCss} />
        <link rel='stylesheet' href={ptSansCss} />
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${appConfig.recaptcha.siteKey}`}
          async
          defer
        />
        {appConfig.live &&
          trackingScripts.map(({ src, html: __html }, i) => {
            const props = (
              src
                ? { async: true, src }
                : { dangerouslySetInnerHTML: { __html } }
            ) as ComponentProps<'script'>;
            return <script key={i} {...props} async defer />;
          })}
      </head>

      <body>
        <noscript>
          {appConfig.live && (
            <iframe
              width='0'
              height='0'
              style={{ display: 'none', visibility: 'hidden' }}
              src={`https://www.googletagmanager.com/ns.html?id=${appConfig.track.google.tagManager}`}
            />
          )}
        </noscript>

        <ThemeProvider initialTheme={theme}>
          <GlobalStyle />
          <main className='font-pt-sans'>
            <ThemeToggle />
            <Outlet />
          </main>
          <Footer />
        </ThemeProvider>

        <Scripts />
      </body>
    </html>
  );
}