import React from 'react';
import Head from 'next/head';

import CoinhavenLogo from '../assets/coinhaven.svg';
import { AboutUsStyle } from './Styled';

const AboutUs: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us | Coinhaven</title>
      </Head>
      <AboutUsStyle>
        <CoinhavenLogo />
        <h1>NextJS + typescript</h1>
        <p>Lorem, ipsum dolor.</p>
      </AboutUsStyle>
    </>
  );
};

export default AboutUs;
