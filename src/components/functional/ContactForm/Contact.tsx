/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FunctionComponent } from 'react';
import { ContactStyled } from './ContactStyled';
import { useFormik } from 'formik';
import { IContactFormFieldProps, IErrorField } from './type';
import { TextField } from '@ui-base/TextField/Index';
import { Button } from '@ui-base/Button/Index';
import Validation from '@utils/validation';
import * as Yup from 'yup';

const Contact: FunctionComponent = () => {
  const SendData = (data: IContactFormFieldProps) => {};

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      subject: '',
      description: ''
    },
    validationSchema: Yup.object({
      email: Validation.email
    }),
    onSubmit: values => {
      SendData(values);
    }
  });

  const disabled: boolean = Object.values(formik.values).some((v: string) => {
    return !v.length;
  });

  console.log(disabled);

  return (
    <ContactStyled>
      <form onSubmit={formik.handleSubmit} className='modal-c-contact'>
        <h1 className='modal-c-title'>Contact Us</h1>
        <div className='modal-c-formgroup'>
          <TextField
            inputSize='large'
            type='text'
            required
            placeholder='Enter full name'
            className='modal-c-input'
            {...formik.getFieldProps('fullName')}
            error={!!formik.errors.fullName && formik.touched.fullName}
            errorText={formik.errors.fullName}
            label='Full Name'
          />
        </div>
        <div className='modal-c-formgroup'>
          <TextField
            label='Email Address'
            placeholder='Enter email address'
            inputSize='large'
            {...formik.getFieldProps('email')}
            error={!!formik.errors.email}
            errorText={formik.errors.email}
            type='email'
            className='modal-c-input'
          />
        </div>
        <div className='modal-c-formgroup'>
          <TextField
            inputSize='large'
            placeholder='Enter subject'
            label='Subject'
            type='text'
            required
            {...formik.getFieldProps('subject')}
            className='modal-c-input'
          />
        </div>
        <div className='modal-c-formgroup'>
          <label className='modal-c-label'>Description</label>
          <textarea
            placeholder='Write your message'
            required
            {...formik.getFieldProps('description')}
            rows={5}
            className='modal-c-textarea'
          ></textarea>
        </div>
        <Button
          size='large'
          mode='dark'
          type='submit'
          className='modal-c-submit'
          disabled={disabled}
          text='Submit'
        />
      </form>
    </ContactStyled>
  );
};

export default Contact;
