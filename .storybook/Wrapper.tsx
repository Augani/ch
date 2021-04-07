import React, { FunctionComponent, ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/styles/global';
import theme from '../src/styles/theme';
import '../src/styles/app.scss';

interface IWrapperProps {
  children: ReactNode;
}

export const Wrapper: FunctionComponent<IWrapperProps> = props => (
  <div className='wrapper'>
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    <GlobalStyle />
  </div>
);
