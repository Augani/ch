/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FunctionComponent } from 'react';
import { SubscribeStyled } from './SubscribeStyled';
import { TextField } from '@ui-base/TextField/Index';
import { ISubscribeFormFieldProps, IErrorField } from './type';
import { useFormik } from 'formik';
import { Button } from '@ui-base/Button/Index';
import Validation from '@utils/validation';
import * as Yup from 'yup';
import FeedBack from '@layout/Guest/Component/FeedBack/Feedback';
const Subscribe: FunctionComponent = () => {
  const [dataSent, setDataSent] = React.useState(false);
  const SendData = (data: ISubscribeFormFieldProps) => {
    setDataSent(true);
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: ''
    },
    validationSchema: Yup.object({
      email: Validation.email,
      fullName: Validation.required
    }),
    onSubmit: (values: ISubscribeFormFieldProps) => {
      SendData(values);
    }
  });

  const disabled: boolean = Object.values(formik.values).some((v: string) => {
    return !v.length || formik.errors.email;
  });

  if (dataSent) {
    return (
      <FeedBack
        Title='Thank you'
        Message='You will stay updated with our newsletter and will be notified about new milestones.'
      />
    );
  }

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
            error={!!formik.errors.fullName && formik.touched.fullName}
            errorText={formik.errors.fullName}
            type='text'
            {...formik.getFieldProps('fullName')}
            placeholder='Enter full name'
            inputSize='large'
          />
        </div>
        <div className='modal-c-formgroup'>
          <TextField
            label='Email Address'
            className='modal-c-input'
            type='email'
            {...formik.getFieldProps('email')}
            error={!!formik.errors.email && formik.touched.email}
            errorText={formik.errors.email}
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
