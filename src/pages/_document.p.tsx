import appConfig from '@config';
import trackingScripts from '@utils/tracking';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import { Children, ComponentProps } from 'react';
import { ServerStyleSheet } from 'styled-components';

const { primary: pacifico, cursive: recursive } = appConfig.font;

const fonts = [pacifico.scriptFamily, recursive.scriptFamily];

const keywords = [
  'rahul kurup',
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

export default class MyDoc extends Document {
  render() {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <meta name='application-name' content='Rahul Kurup' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content='Rahul Kurup' />
          <meta
            name='description'
            content="can't think of a meta description, IYKWIM xD"
          />
          <meta name='keywords' content={keywords} />
          <meta name='format-detection' content='telephone=yes' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#FFFFFF' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />

          {fonts.map(font => (
            <link
              key={font}
              rel='stylesheet'
              href={`https://fonts.googleapis.com/css2?family=${font}&display=swap`}
            />
          ))}

          {trackingScripts.map(({ src, html: __html }, i) => {
            const props = (
              src
                ? { async: true, src }
                : { dangerouslySetInnerHTML: { __html } }
            ) as ComponentProps<'script'>;
            return <script key={i} {...props} />;
          })}
        </Head>

        <body>
          <noscript>
            <iframe
              width='0'
              height='0'
              style={{ display: 'none', visibility: 'hidden' }}
              src={`https://www.googletagmanager.com/ns.html?id=${appConfig.track.google.tagManager}`}
            />
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDoc.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...Children.toArray(initialProps.styles),
        sheet.getStyleElement()
      ]
    } as any;
  } finally {
    sheet.seal();
  }
};
