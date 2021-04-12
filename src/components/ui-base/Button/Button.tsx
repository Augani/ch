import React, { FunctionComponent, ReactElement } from 'react';
import { IButtonProps } from './IButtonProps';
import { ButtonStyled } from './Styled';

export const Button: FunctionComponent<IButtonProps> = props => {
  const { text, size, mode, children, ...rest } = props;
  return (
    <ButtonStyled size={size} mode={mode} {...rest}>
      {text} {children}
    </ButtonStyled>
  );
};
