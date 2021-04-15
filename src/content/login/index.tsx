import React from 'react';
import Head from 'next/head';

import CoinhavenLogo from '../../assets/coinhavenDark.svg';
import { Container } from './LoginStyled';
import { Header } from '../../components/layout/header/header';
import { Button } from '../../components/ui-base/Button/Button';
import { TextField } from '../../components/ui-base/TextField/TextField';
import { TabBar } from '../../components/ui-base/TabBar/TabBar';
const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Coinhaven - Login</title>
      </Head>
        <div className='form-holder'>
          <h1 className='title'>Login</h1>
          <TabBar
            size='large'
            className='tab-bar'
            tabs={['Personal account', 'Institution account']}
          />
          <small className='sub-title'>
            Dont have an account?
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
    </Container>
  );
};

export default Home;
