import React, { FunctionComponent } from 'react';
import { FeedBackStyled } from './FeedBackStyled';
const Contact: FunctionComponent = () => {
  return (
    <FeedBackStyled>
      <div className='modal-c-signupFeedback'>
        <img className='modal-c-cancel' src='./assets/images/cancel.svg' />
        <img src='/assets/images/Check.svg' />
        <h1>Thank you</h1>
        <small className='modal-c-feedback'>
          You will stay updated with our newsletter and will be notified about
          new milestones
        </small>
      </div>
    </FeedBackStyled>
  );
};

export default Contact;
