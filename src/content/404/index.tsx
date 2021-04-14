import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Error404Styled from './Error404Styled';

const Error404: React.FC = () => {
  return (
    <>
      <Head>
        <title>Not Found | Coinhaven</title>
      </Head>
      <Error404Styled>
        <img src='/assets/logos/bright.png' />
        <h1>404 | Oops something went wrong!</h1>
        <p>
          Go back to{' '}
          <Link href='/'>
            <a>Home</a>
          </Link>
        </p>
      </Error404Styled>
    </>
  );
};

export default Error404;
