import React from 'react';
import Head from 'next/head';

import CoinhavenLogo from '../../assets/coinhavenDark.svg';
import { Container } from '../../styles/pages/ForgotPassword';
import { Header } from '../../components/layout/header/header';
import { Button } from '../../components/ui-base/Button/Button';
import { TextField } from '../../components/ui-base/TextField/TextField';
const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Coinhaven - Forgot Password</title>
      </Head>
      <Header className='header'>
        <a href='/' className='logo'>
          <CoinhavenLogo />
        </a>
        <Button text='Sign up' mode='light' size='medium' />
      </Header>
      <main>
        <div className='form-holder'>
          <h1 className='title'>Forgot Password?</h1>
          <small className='sub-title'>
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password.
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
  );
};

export default Home;
