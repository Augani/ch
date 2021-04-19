import React from 'react';
import Head from 'next/head';
import { Container } from './ForgotStyled';
import { Button } from '@ui-base/Button/';
import { TextField } from '@ui-base/TextField/';
import AuthLayout from '@layout/Auth/AuhtLayout';
import ActiveLink from '@utils-components/ActiveLink/ActiveLink';

const Forgot: React.FC = () => {
  return (
    <AuthLayout>
      <Container>
        <Head>
          <title>Coinhaven - Forgot Password</title>
        </Head>
        <main>
          <ActiveLink href='/signup' activeClassName='signup-btn'>
            <Button
              text='Sign up'
              className='signup-btn'
              mode='light'
              size='medium'
            />
          </ActiveLink>
          <div className='form-holder'>
            <h1 className='title'>Forgot Password?</h1>
            <small className='sub-title'>
              Enter the email address you used when you joined and we’ll send
              you instructions to reset your password.
            </small>

            <form className='forgot-password-form'>
              <TextField
                placeholder='Email Adress'
                inputSize='normal'
                label='Email Address'
              />
              <Button
                mode='light'
                disabled={true}
                size='large'
                text='reset password'
              />
            </form>
          </div>
        </main>
      </Container>
    </AuthLayout>
  );
};

export default Forgot;
