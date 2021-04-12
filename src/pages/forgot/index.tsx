import React from 'react';
import Head from 'next/head';

import CoinhavenLogo from '../../assets/coinhavenDark.svg';
import { Container } from '../../styles/pages/ForgotPassword';
import { Header } from '../../components/layout/header/header';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Coinhaven - Forgot Password</title>
      </Head>
      <Header>
        <a href='/' className='logo'>
          <CoinhavenLogo />
        </a>
      </Header>
    </Container>
  );
};

export default Home;
