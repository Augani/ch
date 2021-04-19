import React from 'react';
import Head from 'next/head';

import { Container } from './SignupStyled';
import { Header } from '../../components/layout/header/header';
import { Button } from '../../components/ui-base/Button/Button';
import { TextField } from '../../components/ui-base/TextField/TextField';
import { TabBar } from '../../components/ui-base/TabBar/TabBar';
import { CheckBox } from '../../components/ui-base/CheckBox/CheckBox';
import AuthLayout from '../../components/layout/Auth/AuhtLayout';

const Signup: React.FC = () => {
  return (
    <AuthLayout>
      <Container>
        <Head>
          <title>Coinhaven - Forgot Password</title>
        </Head>
        <main>
          <div className='form-holder'>
            <h1 className='title'>Sign up</h1>
            <TabBar
              size='large'
              className='tab-bar'
              tabs={['Personal account', 'Institution account']}
            />
            <small className='sub-title'>
              Already have an account?
              <a className='link' href='/login'>
                Log in here.
              </a>
            </small>

            <form className='signup-form'>
              <TextField
                placeholder='Enter full name'
                inputSize='normal'
                type='text'
                label='Full Name'
              />
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
                label='Create Password'
              />
              <CheckBox>
                <small className='agreement'>Accept</small>
                <a className='agreement-link'>Service Agreement</a>
              </CheckBox>
              <Button mode='light' disabled={true} size='large' text='submit' />
            </form>
          </div>
        </main>
      </Container>
    </AuthLayout>
  );
};

export default Signup;
