import React, { FunctionComponent } from 'react';
import { FeedBackStyled } from './FeedBackStyled';
const Contact: FunctionComponent = () => {
  return (
    <FeedBackStyled>
      <div className='modal-c-contactFeedback'>
        <img src='/assets/images/Check.svg' />
        <h1 className='modal-c-title'>Thank you</h1>
        <small className='modal-c-feedback'>We will get in touch shortly</small>
      </div>
    </FeedBackStyled>
  );
};

export default Contact;
