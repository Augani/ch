import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import GuestLayout from '@layout/Guest/GuestLayout';
import HomeStyled from '@styles/pages/HomeStyled';

const Home: FunctionComponent = () => {
  return (
    <GuestLayout>
      <Head>
        <title>Coinhaven</title>
      </Head>
      <HomeStyled>Hello Home page us page</HomeStyled>
    </GuestLayout>
  );
};

export default Home;
