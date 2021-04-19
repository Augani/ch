import React, { FunctionComponent, ReactElement } from 'react';
import { ICheckBoxProps } from './type';
import { ICheckBoxPropsStyled } from './styles';

export const CheckBox: FunctionComponent<ICheckBoxProps> = props => {
  const { label, children, checked, ...rest } = props;
  return (
    <ICheckBoxPropsStyled>
      <label className='check-label'>
        {label}
        <input checked={checked} type='checkbox' {...rest} />
        <span className='mark'></span>
      </label>
      {children}
    </ICheckBoxPropsStyled>
  );
};
