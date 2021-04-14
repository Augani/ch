import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ErrorStyled from '@styles/pages/Error';

const AboutUs: React.FC = () => {
  return (
    <>
      <Head>
        <title>Coinhaven</title>
      </Head>
      <ErrorStyled>
        <img src='/assets/logos/bright.png' />
        <h1>Oops something went wrong!</h1>
        <p>
          Go back to{' '}
          <Link href='/'>
            <a>Home</a>
          </Link>
        </p>
      </ErrorStyled>
    </>
  );
};

export default AboutUs;