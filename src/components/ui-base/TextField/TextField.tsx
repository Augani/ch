import React, { FunctionComponent, ReactElement } from 'react';
import { ITextFieldProps } from './ITextFieldProps';
import { TextFieldStyled } from './Styled';

export const TextField: FunctionComponent<ITextFieldProps> = props => {
  const { label, inputSize, ...rest } = props;
  return (
    <TextFieldStyled label={label} inputSize={inputSize}>
      <label>{label}</label>
      <input {...rest} />
      <small>{}</small>
    </TextFieldStyled>
  );
};
