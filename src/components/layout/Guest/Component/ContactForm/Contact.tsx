/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FunctionComponent } from 'react';
import { ContactStyled } from './ContactStyled';
import { useFormik } from 'formik';
import { IContactFormFieldProps, IErrorField } from './type';
import { TextField } from '@ui-base/TextField/Index';
import { Button } from '@ui-base/Button/Index';

const Contact: FunctionComponent = () => {
  const SendData = (data: IContactFormFieldProps) => {};

  const validateForm = (values: IContactFormFieldProps) => {
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
      emailAddress: '',
      subject: '',
      description: ''
    },
    validate: validateForm,
    onSubmit: values => {
      console.log(values);
      SendData(values);
    }
  });

  const disabled: boolean = Object.values(formik.values).some((v: string) => {
    return !v.length;
  });

  console.log(formik.errors);

  return (
    <ContactStyled>
      <form onSubmit={formik.handleSubmit} className='modal-c-contact'>
        <h1 className='modal-c-title'>Contact Us</h1>
        <div className='modal-c-formgroup'>
          <TextField
            inputSize='large'
            type='text'
            name='fullName'
            placeholder='Enter full name'
            className='modal-c-input'
            onChange={formik.handleChange}
            value={formik.values.fullName}
            label='Full Name'
          />
        </div>
        <div className='modal-c-formgroup'>
          <TextField
            label='Email Address'
            placeholder='Enter email address'
            required
            inputSize='large'
            name='emailAddress'
            onChange={formik.handleChange}
            value={formik.values.emailAddress}
            error={!!formik.errors.emailAddress}
            errorText={formik.errors.emailAddress}
            type='email'
            className='modal-c-input'
          />
        </div>
        <div className='modal-c-formgroup'>
          <TextField
            inputSize='large'
            placeholder='Enter subject'
            required
            label='Subject'
            name='subject'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.subject}
            className='modal-c-input'
          />
        </div>
        <div className='modal-c-formgroup'>
          <label className='modal-c-label'>Description</label>
          <textarea
            placeholder='Write your message'
            required
            name='description'
            onChange={formik.handleChange}
            value={formik.values.description}
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
