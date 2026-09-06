import { createStartHandler, StartServer } from '@tanstack/react-start/server';
import { createElement } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

const styledRenderHandler = ({
  router,
  responseHeaders
}: {
  request: Request;
  router: any;
  responseHeaders: Headers;
}) => {
  const sheet = new ServerStyleSheet();

  try {
    let html = ReactDOMServer.renderToString(
      sheet.collectStyles(createElement(StartServer, { router }))
    );

    router.serverSsr!.setRenderFinished();

    const injectedHtml = router.serverSsr!.takeBufferedHtml();
    if (injectedHtml) {
      html = html.replace(`</body>`, () => `${injectedHtml}</body>`);
    }

    const styleTags = sheet.getStyleTags();
    if (styleTags) {
      html = html.replace(`</head>`, () => `${styleTags}</head>`);
    }

    return new Response(`<!DOCTYPE html>${html}`, {
      status:
        router._serverResult?.type === 'render'
          ? router._serverResult.status
          : 200,
      headers: responseHeaders
    });
  } catch (error) {
    console.error('Render to string error:', error);
    return new Response('Internal Server Error', {
      status: 500,
      headers: responseHeaders
    });
  } finally {
    sheet.seal();
    router.serverSsr?.cleanup();
  }
};

export default { fetch: createStartHandler(styledRenderHandler) };