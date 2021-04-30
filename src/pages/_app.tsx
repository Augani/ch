import React, { FunctionComponent } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import GlobalStyle from '@styles/global';
import theme from '@styles/theme';
import '../styles/app.scss';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
