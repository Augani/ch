import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import AuthLayout from '@layout/Auth/AuhtLayout';

const SignUp: FunctionComponent = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Sign Up | Coinhaven</title>
      </Head>
      <h3>Welcome to SignUp page</h3>
    </AuthLayout>
  );
};

export default SignUp;
