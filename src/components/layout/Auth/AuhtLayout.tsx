import React, { FunctionComponent } from 'react';
import IAuthLayoutProps from './IAuthLayoutProps';

import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

const AuthLayout: FunctionComponent<IAuthLayoutProps> = props => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AuthLayout;
