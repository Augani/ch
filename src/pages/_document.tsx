import React from 'react';
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
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
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang='pt'>
        <Head>
          <meta charSet='utf-8' />
          <link
            rel='icon'
            href='https://coinhaven.com/wp-content/uploads/2020/08/favicon.png'
          />
          <meta
            name='viewport'
            content='width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        {/* This FontAwesome we are using for Social Media Icon at GuestLayout/Footer. Remove this once we make a component for icons to use globally */}
        <script
          src='https://kit.fontawesome.com/631f446866.js'
          crossOrigin='anonymous'
        ></script>
      </Html>
    );
  }
}
