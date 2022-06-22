import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import { Children } from 'react';
import { ServerStyleSheet } from 'styled-components';

const fonts = ['Pacifico', 'PT+Sans'];

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
        </Head>
        <body>
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
