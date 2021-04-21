/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FunctionComponent } from 'react';
import { ContactStyled } from './ContactStyled';
import { useFormik } from 'formik';
import { IContactFormFieldProps } from './type';

const Contact: FunctionComponent = () => {
  const [disabled, setDisabled] = React.useState(true);

  const SendData = (data: IContactFormFieldProps) => {};

  const validateForm = (values: IContactFormFieldProps) => {
    const errors: IContactFormFieldProps = {
      fullName: '',
      emailAddress: '',
      description: '',
      subject: ''
    };
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAddress)) {
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
    onSubmit: (values: IContactFormFieldProps) => {
      SendData(values);
    }
  });
  return (
    <ContactStyled>
      <form onSubmit={formik.handleSubmit} className='modal-c-contact'>
        <h1 className='modal-c-title'>Contact Us</h1>
        <div className='modal-c-formgroup'>
          <label className='modal-c-label'>Full Name</label>
          <input
            placeholder='Enter full name'
            required
            name='fullName'
            onChange={formik.handleChange}
            value={formik.values.fullName}
            type='text'
            className='modal-c-input'
          />
        </div>
        <div className='modal-c-formgroup'>
          <label className='modal-c-label'>Email Address</label>
          <input
            placeholder='Enter email address'
            required
            name='emailAddress'
            onChange={formik.handleChange}
            value={formik.values.emailAddress}
            type='email'
            className={`modal-c-input ${
              formik.errors.emailAddress ? 'error' : ''
            }`}
          />
        </div>
        <div className='modal-c-formgroup'>
          <label className='modal-c-label'>Subject</label>
          <input
            placeholder='Enter subject'
            required
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
        <button
          disabled={
            !!Object.values(formik.errors).filter(o => !o.length).length
          }
          className='modal-c-submit'
        >
          submit
        </button>
      </form>
    </ContactStyled>
  );
};

export default Contact;
