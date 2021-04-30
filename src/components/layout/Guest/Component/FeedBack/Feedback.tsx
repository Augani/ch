import React, { FunctionComponent } from 'react';
import { FeedBackStyled } from './FeedBackStyled';
import { IFeedBackProps } from './type';
const FeedBack: FunctionComponent<IFeedBackProps> = (props: IFeedBackProps) => {
  const { Title, Message } = props;
  return (
    <FeedBackStyled>
      <div className='modal-c-contactFeedback'>
        <img src='/assets/images/Check.svg' />
        <h1 className='modal-c-title'>{Title}</h1>
        <small className='modal-c-feedback'>{Message}</small>
      </div>
    </FeedBackStyled>
  );
};

export default FeedBack;
