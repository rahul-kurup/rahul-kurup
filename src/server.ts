import { createStartHandler, StartServer } from '@tanstack/react-start/server';
import { createElement } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';

const emotionRenderHandler = ({
  router,
  responseHeaders
}: {
  request: Request;
  router: any;
  responseHeaders: Headers;
}) => {
  const cache = createCache({ key: 'css' });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  try {
    let html = ReactDOMServer.renderToString(
      createElement(
        CacheProvider,
        { value: cache },
        createElement(StartServer, { router })
      )
    );

    router.serverSsr!.setRenderFinished();

    const injectedHtml = router.serverSsr!.takeBufferedHtml();
    if (injectedHtml) {
      html = html.replace(`</body>`, () => `${injectedHtml}</body>`);
    }

    const { html: htmlWithStyles, styles } = extractCriticalToChunks(html);
    const styleTags = constructStyleTagsFromChunks({ html: htmlWithStyles, styles });
    if (styleTags) {
      html = htmlWithStyles.replace(`</head>`, () => `${styleTags}</head>`);
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
    router.serverSsr?.cleanup();
  }
};

export default { fetch: createStartHandler(emotionRenderHandler) };