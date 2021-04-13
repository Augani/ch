import React, { FunctionComponent, ReactElement } from 'react';
import { ICheckBoxProps } from './ICheckBoxProps';
import { ICheckBoxPropsStyled } from './Styled';

export const CheckBox: FunctionComponent<ICheckBoxProps> = props => {
  const { label, children, ...rest } = props;
  return (
    <ICheckBoxPropsStyled>
      <label className='check-label'>
        {label}
        <input type='checkbox' {...rest} />
        <span className='mark'></span>
      </label>
      {children}
    </ICheckBoxPropsStyled>
  );
};
