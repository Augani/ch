import React, { FunctionComponent, ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/styles/global';
import theme from '../src/styles/theme';
import styles from '../src/styles/app.scss';

interface IWrapperProps {
  children: ReactNode;
}

export const Wrapper: FunctionComponent<IWrapperProps> = props => (
  <ThemeProvider theme={theme}>
    <div className='wrapper'>
      {props.children}
      <GlobalStyle />
    </div>
  </ThemeProvider>
);
