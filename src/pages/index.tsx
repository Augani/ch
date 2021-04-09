import React from 'react';
import Head from 'next/head';

import CoinhavenLogo from '../assets/coinhaven.svg';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <CoinhavenLogo />
      <h1>NextJS + typescript</h1>
      <p>Lorem, ipsum dolor.</p>
    </Container>
  );
};

export default Home;
