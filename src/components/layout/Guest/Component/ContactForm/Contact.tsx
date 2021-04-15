import React, { FunctionComponent } from 'react';
import { ContactStyled } from './ContactStyled';
const Contact: FunctionComponent = () => {
  const [disabled, setDisabled] = React.useState(true);
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <ContactStyled>
      <form onSubmit={formSubmit} className='modal-c-contact'>
        <h1 className='modal-c-title'>Contact Us</h1>
        <div className='modal-c-formgroup'>
          <label className='modal-c-label'>Full Name</label>
          <input
            placeholder='Enter full name'
            required
            type='text'
            className='modal-c-input'
          />
        </div>
        <div className='modal-c-formgroup'>
          <label className='modal-c-label'>Email Address</label>
          <input
            placeholder='Enter email address'
            required
            type='email'
            className='modal-c-input'
          />
        </div>
        <div className='modal-c-formgroup'>
          <label className='modal-c-label'>Subject</label>
          <input
            placeholder='Enter subject'
            required
            type='email'
            className='modal-c-input'
          />
        </div>
        <div className='modal-c-formgroup'>
          <label className='modal-c-label'>Description</label>
          <textarea
            placeholder='Write your message'
            required
            rows={5}
            className='modal-c-textarea'
          ></textarea>
        </div>
        <button disabled={disabled} className='modal-c-submit'>
          submit
        </button>
      </form>
    </ContactStyled>
  );
};

export default Contact;
