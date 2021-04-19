import React, { FunctionComponent, ReactElement } from 'react';
import { ITextFieldProps } from './type';
import { TextFieldStyled } from './styles';
import Danger from './icons/danger.svg';

export const TextField: FunctionComponent<ITextFieldProps> = props => {
  const { label, inputSize, error, errorText, className, ...rest } = props;
  const newClassName = className || '';
  return (
    <TextFieldStyled label={label} inputSize={inputSize}>
      <label>{label}</label>
      <input
        className={`${error ? newClassName + ' error' : className}`}
        {...rest}
      />
      {error ? (
        <div className='error-field'>
          <Danger />
          <small>{errorText}</small>
        </div>
      ) : null}
    </TextFieldStyled>
  );
};
