import React from 'react';
import Head from 'next/head';

import { Container } from './LoginStyled';
import { Header } from '../../components/layout/header/header';
import { Button } from '@ui-base/Button';
import { TextField } from '@ui-base/TextField';
import { TabBar } from '@ui-base/TabBar';
import AuthLayout from '@layout/Auth/AuhtLayout';

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <Container>
        <Head>
          <title>Coinhaven - Login</title>
        </Head>
        <div className='main-page'>
          <div className='form-holder'>
            <h1 className='title'>Login</h1>
            <TabBar
              size='large'
              className='tab-bar'
              activeTab={3}
              tabs={['Personal account', 'Institution account']}
            />
            <small className='sub-title'>
              Don&apos;t have an account?
              <a className='link' href='/signup'>
                Sign up here.
              </a>
            </small>

            <form className='login-form'>
              <TextField
                placeholder='Email Adress'
                inputSize='normal'
                type='email'
                label='Email Address'
              />
              <TextField
                placeholder='Enter password'
                type='password'
                inputSize='normal'
                label='Password'
              />
              <a href='/forgot' className='link forgot-password'>
                Forgot password?
              </a>
              <Button mode='light' disabled={true} size='large' text='log in' />
            </form>
          </div>
        </div>
      </Container>
    </AuthLayout>
  );
};

export default Login;
