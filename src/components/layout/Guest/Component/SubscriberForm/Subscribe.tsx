import React, { FunctionComponent } from 'react';
import { SubscribeStyled } from './SubscribeStyled';
const Subscribe: FunctionComponent = () => {
  const [disabled, setDisabled] = React.useState(true);
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <SubscribeStyled>
      <form onSubmit={formSubmit} className='modal-c-signup'>
        <p className='modal-c-title'>Sign up</p>
        <small className='modal-c-subtitle'>
          for our newsletter and get notified about new milestones
        </small>
        <div className='modal-c-formgroup'>
          <label className='modal-c-label'>Full Name</label>
          <input
            placeholder='Enter full name'
            type='text'
            className='modal-c-input'
          />
        </div>
        <div className='modal-c-formgroup'>
          <label className='modal-c-label'>Email Address</label>
          <input
            placeholder='Enter email address'
            type='email'
            className='modal-c-input'
          />
        </div>
        <button disabled={disabled} className='modal-c-submit'>
          submit
        </button>
      </form>
    </SubscribeStyled>
  );
};

export default Subscribe;
