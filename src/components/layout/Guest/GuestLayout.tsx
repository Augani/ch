import React, { FunctionComponent } from 'react';
import IGuestLayoutProps from './IGuestLayoutProps';

import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

const GuestLayout: FunctionComponent<IGuestLayoutProps> = props => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default GuestLayout;
