/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FunctionComponent } from 'react';
import { SubscribeStyled } from './SubscribeStyled';
import { TextField } from '@ui-base/TextField/Index';
import { ISubscribeFormFieldProps, IErrorField } from './type';
import { useFormik } from 'formik';
import { Button } from '@ui-base/Button/Index';
const Subscribe: FunctionComponent = () => {
  const SendData = (data: ISubscribeFormFieldProps) => {};

  const validateForm = (values: ISubscribeFormFieldProps) => {
    const errors: IErrorField = {};
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAddress) &&
      values.emailAddress
    ) {
      errors.emailAddress = 'Email address is invalid';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      emailAddress: ''
    },
    validate: validateForm,
    onSubmit: (values: ISubscribeFormFieldProps) => {
      SendData(values);
    }
  });

  const disabled: boolean = Object.values(formik.values).some((v: string) => {
    return !v.length || formik.errors.emailAddress;
  });
  return (
    <SubscribeStyled>
      <form onSubmit={formik.handleSubmit} className='modal-c-signup'>
        <p className='modal-c-title'>Sign up</p>
        <small className='modal-c-subtitle'>
          for our newsletter and get notified about new milestones
        </small>
        <div className='modal-c-formgroup'>
          <TextField
            label='Full name'
            className='modal-c-input'
            type='text'
            name='fullName'
            onChange={formik.handleChange}
            value={formik.values.fullName}
            placeholder='Enter full name'
            inputSize='large'
          />
        </div>
        <div className='modal-c-formgroup'>
          <TextField
            label='Email Address'
            className='modal-c-input'
            type='email'
            name='emailAddress'
            onChange={formik.handleChange}
            value={formik.values.emailAddress}
            error={!!formik.errors.emailAddress}
            errorText={formik.errors.emailAddress}
            placeholder='Enter email address'
            inputSize='large'
          />
        </div>
        <Button
          disabled={disabled}
          className='modal-c-submit'
          text='Submit'
          type='submit'
          mode='dark'
          size='large'
        />
      </form>
    </SubscribeStyled>
  );
};

export default Subscribe;
